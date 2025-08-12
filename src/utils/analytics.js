// Google Analytics 和其他分析工具配置

// Google Analytics 4 配置
export const GA_TRACKING_ID = 'G-HNNEJHY1SZ'; // 替换为实际的GA4跟踪ID

// 初始化Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    // 加载gtag脚本
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script1);
    
    // 初始化gtag
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    `;
    document.head.appendChild(script2);
  }
};

// 页面浏览事件
export const pageview = (url, title) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: title,
      page_location: url,
    });
  }
};

// 自定义事件跟踪
export const trackEvent = (action, category = 'engagement', label = '', value = 0) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// 下载事件跟踪
export const trackDownload = (platform, fileName) => {
  trackEvent('download', 'app_download', `${platform}_${fileName}`);
};

// 功能使用跟踪
export const trackFeatureClick = (featureName) => {
  trackEvent('feature_click', 'user_interaction', featureName);
};

// 外部链接点击跟踪
export const trackExternalLink = (url, linkText) => {
  trackEvent('external_link_click', 'outbound', `${linkText}_${url}`);
};

// 搜索事件跟踪
export const trackSearch = (searchTerm) => {
  trackEvent('search', 'site_search', searchTerm);
};

// 表单提交跟踪
export const trackFormSubmit = (formName) => {
  trackEvent('form_submit', 'form_interaction', formName);
};

// 滚动深度跟踪
export const initScrollTracking = () => {
  if (typeof window === 'undefined') return;
  
  let scrollDepths = [25, 50, 75, 90];
  let scrollDepthsReached = [];
  
  const trackScrollDepth = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);
    
    scrollDepths.forEach(depth => {
      if (scrollPercent >= depth && !scrollDepthsReached.includes(depth)) {
        scrollDepthsReached.push(depth);
        trackEvent('scroll_depth', 'engagement', `${depth}%`, depth);
      }
    });
  };
  
  window.addEventListener('scroll', trackScrollDepth, { passive: true });
};

// 页面停留时间跟踪
export const initTimeOnPageTracking = () => {
  if (typeof window === 'undefined') return;
  
  const startTime = Date.now();
  
  const trackTimeOnPage = () => {
    const timeOnPage = Math.round((Date.now() - startTime) / 1000);
    trackEvent('time_on_page', 'engagement', 'seconds', timeOnPage);
  };
  
  // 在页面卸载时跟踪停留时间
  window.addEventListener('beforeunload', trackTimeOnPage);
  
  // 每30秒跟踪一次（用于单页应用）
  setInterval(() => {
    const timeOnPage = Math.round((Date.now() - startTime) / 1000);
    if (timeOnPage % 30 === 0) {
      trackEvent('time_milestone', 'engagement', `${timeOnPage}s`, timeOnPage);
    }
  }, 1000);
};

// 错误跟踪
export const trackError = (error, errorInfo = '') => {
  trackEvent('javascript_error', 'error', `${error.message}_${errorInfo}`);
};

// 性能跟踪
export const trackPerformance = () => {
  if (typeof window === 'undefined' || !window.performance) return;
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      const domReadyTime = perfData.domContentLoadedEventEnd - perfData.navigationStart;
      
      trackEvent('page_load_time', 'performance', 'milliseconds', pageLoadTime);
      trackEvent('dom_ready_time', 'performance', 'milliseconds', domReadyTime);
    }, 0);
  });
};

export default {
  initGA,
  pageview,
  trackEvent,
  trackDownload,
  trackFeatureClick,
  trackExternalLink,
  trackSearch,
  trackFormSubmit,
  initScrollTracking,
  initTimeOnPageTracking,
  trackError,
  trackPerformance
};