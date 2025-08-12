// 性能优化工具函数

// 图片懒加载观察器
export const createImageObserver = () => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.dataset.src;
        const srcset = img.dataset.srcset;
        
        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
        }
        
        if (srcset) {
          img.srcset = srcset;
          img.removeAttribute('data-srcset');
        }
        
        img.classList.remove('lazy');
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });

  return imageObserver;
};

// 预连接到外部域名
export const preconnectExternalDomains = () => {
  const domains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com'
  ];

  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// 优化第三方脚本加载
export const loadThirdPartyScripts = () => {
  // 延迟加载非关键脚本
  const loadScript = (src, async = true, defer = true) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = async;
      script.defer = defer;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  // 在页面加载完成后加载非关键脚本
  window.addEventListener('load', () => {
    setTimeout(() => {
      // 加载其他分析脚本
      loadScript('https://www.googletagmanager.com/gtag/js?id=G-HNNEJHY1SZ');
    }, 2000);
  });
};

// 优化CSS加载
export const optimizeCSSLoading = () => {
  // 内联关键CSS
  const criticalCSS = `
    /* 关键路径CSS */
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
      margin: 0;
      padding: 0;
      line-height: 1.6;
    }
    
    .hero-section {
      min-height: 60vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .btn-primary {
      background-color: #3b82f6;
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      text-decoration: none;
      display: inline-block;
      transition: background-color 0.2s;
    }
    
    .btn-primary:hover {
      background-color: #2563eb;
    }
  `;

  const style = document.createElement('style');
  style.textContent = criticalCSS;
  document.head.appendChild(style);

  // 异步加载非关键CSS
  const loadCSS = (href) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print';
    link.onload = function() {
      this.media = 'all';
    };
    document.head.appendChild(link);
  };

  // 延迟加载非关键样式
  setTimeout(() => {
    loadCSS('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  }, 100);
};

// 优化滚动性能
export const optimizeScrollPerformance = () => {
  let ticking = false;

  const updateScrollPosition = () => {
    // 处理滚动相关的DOM操作
    const scrollTop = window.pageYOffset;
    const header = document.querySelector('header');
    
    if (header) {
      if (scrollTop > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    
    ticking = false;
  };

  const requestScrollUpdate = () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestScrollUpdate, { passive: true });
};

// 内存优化
export const optimizeMemoryUsage = () => {
  // 清理未使用的事件监听器
  const cleanupEventListeners = () => {
    // 移除不再需要的事件监听器
    const elements = document.querySelectorAll('[data-cleanup]');
    elements.forEach(element => {
      const events = element.dataset.cleanup.split(',');
      events.forEach(event => {
        element.removeEventListener(event.trim(), () => {});
      });
    });
  };

  // 在页面卸载时清理
  window.addEventListener('beforeunload', cleanupEventListeners);

  // 定期清理DOM中的无用元素
  setInterval(() => {
    const hiddenElements = document.querySelectorAll('[style*="display: none"]');
    hiddenElements.forEach(element => {
      if (element.dataset.keepHidden !== 'true') {
        element.remove();
      }
    });
  }, 30000); // 每30秒清理一次
};

// Web Vitals 监控
export const monitorWebVitals = () => {
  // 监控 Largest Contentful Paint (LCP)
  const observeLCP = () => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
        
        // 发送到分析服务
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'performance',
            event_label: 'LCP',
            value: Math.round(lastEntry.startTime)
          });
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  };

  // 监控 First Input Delay (FID)
  const observeFID = () => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          console.log('FID:', entry.processingStart - entry.startTime);
          
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'performance',
              event_label: 'FID',
              value: Math.round(entry.processingStart - entry.startTime)
            });
          }
        });
      });
      
      observer.observe({ entryTypes: ['first-input'] });
    }
  };

  // 监控 Cumulative Layout Shift (CLS)
  const observeCLS = () => {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        
        console.log('CLS:', clsValue);
        
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'performance',
            event_label: 'CLS',
            value: Math.round(clsValue * 1000)
          });
        }
      });
      
      observer.observe({ entryTypes: ['layout-shift'] });
    }
  };

  observeLCP();
  observeFID();
  observeCLS();
};

export default {
  createImageObserver,
  preconnectExternalDomains,
  loadThirdPartyScripts,
  optimizeCSSLoading,
  optimizeScrollPerformance,
  optimizeMemoryUsage,
  monitorWebVitals
};