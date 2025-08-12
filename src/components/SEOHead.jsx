import React, { useEffect } from 'react';
import { SEO_CONFIG, generateMetaTags, generateStructuredData } from '../config/seo';

const SEOHead = ({ 
  page = 'home', 
  title, 
  description, 
  keywords, 
  image, 
  url,
  structuredDataType = 'software'
}) => {
  useEffect(() => {
    const metaTags = generateMetaTags(page);
    const structuredData = generateStructuredData(structuredDataType);
    
    // 设置页面标题
    document.title = title || metaTags.title;
    
    // 更新或创建meta标签
    const updateMetaTag = (name, content, property = false) => {
      if (!content) return;
      
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let metaTag = document.querySelector(selector);
      
      if (!metaTag) {
        metaTag = document.createElement('meta');
        if (property) {
          metaTag.setAttribute('property', name);
        } else {
          metaTag.setAttribute('name', name);
        }
        document.head.appendChild(metaTag);
      }
      
      metaTag.setAttribute('content', content);
    };
    
    // 更新基本meta标签
    updateMetaTag('description', description || metaTags.description);
    updateMetaTag('keywords', keywords || metaTags.keywords);
    
    // 更新Open Graph标签
    updateMetaTag('og:title', title || metaTags.title, true);
    updateMetaTag('og:description', description || metaTags.description, true);
    updateMetaTag('og:url', url || metaTags.canonical, true);
    updateMetaTag('og:image', image || SEO_CONFIG.images.ogImage, true);
    
    // 更新Twitter标签
    updateMetaTag('twitter:title', title || metaTags.title);
    updateMetaTag('twitter:description', description || metaTags.description);
    updateMetaTag('twitter:image', image || SEO_CONFIG.images.twitterCard);
    
    // 更新canonical链接
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', url || metaTags.canonical);
    
    // 添加结构化数据
    let structuredDataScript = document.querySelector('script[data-seo="structured-data"]');
    if (structuredDataScript) {
      document.head.removeChild(structuredDataScript);
    }
    
    structuredDataScript = document.createElement('script');
    structuredDataScript.type = 'application/ld+json';
    structuredDataScript.setAttribute('data-seo', 'structured-data');
    structuredDataScript.textContent = JSON.stringify(structuredData);
    document.head.appendChild(structuredDataScript);
    
    // 清理函数
    return () => {
      const scriptToRemove = document.querySelector('script[data-seo="structured-data"]');
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, [page, title, description, keywords, image, url, structuredDataType]);
  
  return null; // 这个组件不渲染任何内容
};

export default SEOHead;