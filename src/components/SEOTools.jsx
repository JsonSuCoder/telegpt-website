import { useEffect } from 'react';
import { initGA, initScrollTracking, initTimeOnPageTracking, trackPerformance } from '../utils/analytics';
import { 
  preconnectExternalDomains, 
  loadThirdPartyScripts,
  optimizeScrollPerformance,
  optimizeMemoryUsage,
  monitorWebVitals
} from '../utils/performance';

// SEO工具组件 - 处理全局SEO功能
const SEOTools = () => {
  useEffect(() => {
    // 初始化Google Analytics
    initGA();
    
    // 初始化滚动深度跟踪
    initScrollTracking();
    
    // 初始化页面停留时间跟踪
    initTimeOnPageTracking();
    
    // 初始化性能跟踪
    trackPerformance();
    
    // 预连接外部域名
    preconnectExternalDomains();
    
    // 加载第三方脚本
    loadThirdPartyScripts();
    
    // 优化滚动性能
    optimizeScrollPerformance();
    
    // 优化内存使用
    optimizeMemoryUsage();
    
    // 监控Web Vitals
    monitorWebVitals();

    
    // 添加结构化数据面包屑
    const addBreadcrumbStructuredData = () => {
      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://telegpt.org/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Features",
            "item": "https://telegpt.org/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Pricing",
            "item": "https://telegpt.org/pricing"
          }
        ]
      });
      document.head.appendChild(breadcrumbScript);
      
      return () => {
        if (document.head.contains(breadcrumbScript)) {
          document.head.removeChild(breadcrumbScript);
        }
      };
    };
    
    const cleanupBreadcrumb = addBreadcrumbStructuredData();
    
    // 添加组织结构化数据
    const addOrganizationStructuredData = () => {
      const orgScript = document.createElement('script');
      orgScript.type = 'application/ld+json';
      orgScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "TeleGPT",
        "url": "https://telegpt.org",
        "logo": "https://telegpt.org/images/logo.png",
        "description": "AI-powered Telegram assistant for chat summaries, grammar checking, translation, and productivity features.",
        "foundingDate": "2024",
        "sameAs": [
          "https://twitter.com/telegpt",
          "https://github.com/telegpt",
          "https://linkedin.com/company/telegpt"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "support@telegpt.org",
          "availableLanguage": ["English", "Chinese", "Spanish", "French"]
        }
      });
      document.head.appendChild(orgScript);
      
      return () => {
        if (document.head.contains(orgScript)) {
          document.head.removeChild(orgScript);
        }
      };
    };
    
    const cleanupOrganization = addOrganizationStructuredData();
    
    // 优化图片懒加载
    const optimizeImageLoading = () => {
      // 为所有图片添加loading="lazy"属性
      const images = document.querySelectorAll('img:not([loading])');
      images.forEach(img => {
        img.loading = 'lazy';
        img.decoding = 'async';
      });
      
      // 为关键图片移除lazy loading
      const criticalImages = document.querySelectorAll('img[data-critical]');
      criticalImages.forEach(img => {
        img.loading = 'eager';
      });
    };
    
    // 延迟执行图片优化
    setTimeout(optimizeImageLoading, 100);
    
    // 添加页面可见性API跟踪
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // 页面隐藏时的处理
        console.log('Page hidden');
      } else {
        // 页面可见时的处理
        console.log('Page visible');
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // 清理函数
    return () => {
      cleanupBreadcrumb();
      cleanupOrganization();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  
  // 添加关键的CSS优化
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* 关键CSS优化 */
      * {
        box-sizing: border-box;
      }
      
      /* 字体优化 */
      body {
        font-display: swap;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      /* 图片优化 */
      img {
        max-width: 100%;
        height: auto;
      }
      
      /* 减少布局偏移 */
      .hero-section {
        min-height: 60vh;
      }
        
      /* 滚动行为优化 */
      html {
        scroll-behavior: smooth;
      }
      
      /* 减少动画对性能的影响 */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);
  
  return null; // 这个组件不渲染任何内容
};

export default SEOTools;