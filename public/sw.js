// Service Worker for TeleGPT Website
// 提供缓存策略和离线支持

const CACHE_NAME = 'telegpt-v1.0.0';
const STATIC_CACHE = 'telegpt-static-v1.0.0';
const DYNAMIC_CACHE = 'telegpt-dynamic-v1.0.0';
const IMAGE_CACHE = 'telegpt-images-v1.0.0';

// 需要预缓存的静态资源
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/images/logo.png',
  '/images/app-icon.webp',
  '/images/hero-bg.webp'
];

// 需要缓存的API端点
const API_ENDPOINTS = [
  '/api/features',
  '/api/pricing',
  '/api/testimonials'
];

// 安装事件 - 预缓存静态资源
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    Promise.all([
      // 缓存静态资源
      caches.open(STATIC_CACHE).then(cache => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      }),
      
      // 立即激活新的Service Worker
      self.skipWaiting()
    ])
  );
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    Promise.all([
      // 清理旧缓存
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== IMAGE_CACHE) {
              console.log('Service Worker: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      
      // 立即控制所有客户端
      self.clients.claim()
    ])
  );
});

// 拦截网络请求
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // 只处理同源请求
  if (url.origin !== location.origin) {
    return;
  }
  
  // 根据请求类型选择不同的缓存策略
  if (request.destination === 'image') {
    // 图片资源：缓存优先策略
    event.respondWith(cacheFirstStrategy(request, IMAGE_CACHE));
  } else if (isStaticAsset(request.url)) {
    // 静态资源：缓存优先策略
    event.respondWith(cacheFirstStrategy(request, STATIC_CACHE));
  } else if (isAPIRequest(request.url)) {
    // API请求：网络优先策略
    event.respondWith(networkFirstStrategy(request, DYNAMIC_CACHE));
  } else if (request.destination === 'document') {
    // HTML文档：网络优先策略，离线时返回缓存
    event.respondWith(networkFirstWithFallback(request));
  } else {
    // 其他资源：网络优先策略
    event.respondWith(networkFirstStrategy(request, DYNAMIC_CACHE));
  }
});

// 缓存优先策略
async function cacheFirstStrategy(request, cacheName) {
  try {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      // 后台更新缓存
      updateCacheInBackground(request, cache);
      return cachedResponse;
    }
    
    // 缓存中没有，从网络获取
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // 缓存成功的响应
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Cache first strategy failed:', error);
    
    // 如果是图片请求失败，返回占位图
    if (request.destination === 'image') {
      return new Response(
        '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="#f3f4f6"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af">Image</text></svg>',
        { headers: { 'Content-Type': 'image/svg+xml' } }
      );
    }
    
    throw error;
  }
}

// 网络优先策略
async function networkFirstStrategy(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Network failed, trying cache:', error);
    
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
}

// 网络优先策略（带离线回退）
async function networkFirstWithFallback(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Network failed for document, trying cache:', error);
    
    // 尝试从缓存获取
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // 返回离线页面
    const offlineResponse = await cache.match('/');
    if (offlineResponse) {
      return offlineResponse;
    }
    
    // 最后的回退
    return new Response(
      `<!DOCTYPE html>
      <html>
      <head>
        <title>TeleGPT - Offline</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
          .offline-message { max-width: 400px; margin: 0 auto; }
          .retry-btn { background: #3b82f6; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; }
        </style>
      </head>
      <body>
        <div class="offline-message">
          <h1>You're Offline</h1>
          <p>Please check your internet connection and try again.</p>
          <button class="retry-btn" onclick="window.location.reload()">Retry</button>
        </div>
      </body>
      </html>`,
      { headers: { 'Content-Type': 'text/html' } }
    );
  }
}

// 后台更新缓存
async function updateCacheInBackground(request, cache) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      await cache.put(request, networkResponse);
    }
  } catch (error) {
    console.log('Background cache update failed:', error);
  }
}

// 判断是否为静态资源
function isStaticAsset(url) {
  const staticExtensions = ['.js', '.css', '.woff', '.woff2', '.ttf', '.eot'];
  return staticExtensions.some(ext => url.includes(ext)) || 
         STATIC_ASSETS.some(asset => url.includes(asset));
}

// 判断是否为API请求
function isAPIRequest(url) {
  return url.includes('/api/') || 
         API_ENDPOINTS.some(endpoint => url.includes(endpoint));
}

// 监听消息事件
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_URLS') {
    const urls = event.data.payload;
    cacheUrls(urls);
  }
});

// 缓存指定的URLs
async function cacheUrls(urls) {
  const cache = await caches.open(DYNAMIC_CACHE);
  
  for (const url of urls) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        await cache.put(url, response);
      }
    } catch (error) {
      console.error('Failed to cache URL:', url, error);
    }
  }
}

// 定期清理过期缓存
self.addEventListener('periodicsync', event => {
  if (event.tag === 'cache-cleanup') {
    event.waitUntil(cleanupExpiredCache());
  }
});

// 清理过期缓存
async function cleanupExpiredCache() {
  const cacheNames = await caches.keys();
  const maxAge = 7 * 24 * 60 * 60 * 1000; // 7天
  
  for (const cacheName of cacheNames) {
    if (cacheName.includes('dynamic') || cacheName.includes('images')) {
      const cache = await caches.open(cacheName);
      const requests = await cache.keys();
      
      for (const request of requests) {
        const response = await cache.match(request);
        const dateHeader = response.headers.get('date');
        
        if (dateHeader) {
          const responseDate = new Date(dateHeader);
          const now = new Date();
          
          if (now - responseDate > maxAge) {
            await cache.delete(request);
            console.log('Deleted expired cache entry:', request.url);
          }
        }
      }
    }
  }
}

console.log('Service Worker: Loaded');