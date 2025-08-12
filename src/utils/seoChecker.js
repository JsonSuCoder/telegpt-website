// SEO检查工具 - 验证SEO优化效果

// 检查页面基本SEO元素
export const checkBasicSEO = () => {
  const results = {
    title: null,
    description: null,
    keywords: null,
    canonical: null,
    viewport: null,
    charset: null,
    lang: null,
    openGraph: {},
    twitter: {},
    structuredData: [],
    images: [],
    links: [],
    headings: {},
    performance: {},
    accessibility: {},
    errors: [],
    warnings: [],
    suggestions: []
  };

  try {
    // 检查标题
    const title = document.querySelector('title');
    if (title) {
      results.title = {
        content: title.textContent,
        length: title.textContent.length,
        isOptimal: title.textContent.length >= 30 && title.textContent.length <= 60
      };
      
      if (title.textContent.length < 30) {
        results.warnings.push('Title is too short (< 30 characters)');
      } else if (title.textContent.length > 60) {
        results.warnings.push('Title is too long (> 60 characters)');
      }
    } else {
      results.errors.push('Missing title tag');
    }

    // 检查描述
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      const content = description.getAttribute('content');
      results.description = {
        content: content,
        length: content.length,
        isOptimal: content.length >= 120 && content.length <= 160
      };
      
      if (content.length < 120) {
        results.warnings.push('Meta description is too short (< 120 characters)');
      } else if (content.length > 160) {
        results.warnings.push('Meta description is too long (> 160 characters)');
      }
    } else {
      results.errors.push('Missing meta description');
    }

    // 检查关键词
    const keywords = document.querySelector('meta[name="keywords"]');
    if (keywords) {
      const content = keywords.getAttribute('content');
      results.keywords = {
        content: content,
        count: content.split(',').length,
        isOptimal: content.split(',').length >= 5 && content.split(',').length <= 15
      };
    }

    // 检查canonical链接
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      results.canonical = canonical.getAttribute('href');
    } else {
      results.warnings.push('Missing canonical link');
    }

    // 检查viewport
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      results.viewport = viewport.getAttribute('content');
    } else {
      results.errors.push('Missing viewport meta tag');
    }

    // 检查字符编码
    const charset = document.querySelector('meta[charset]');
    if (charset) {
      results.charset = charset.getAttribute('charset');
    } else {
      results.warnings.push('Missing charset declaration');
    }

    // 检查语言
    const lang = document.documentElement.getAttribute('lang');
    if (lang) {
      results.lang = lang;
    } else {
      results.warnings.push('Missing lang attribute on html element');
    }

    // 检查Open Graph标签
    const ogTags = document.querySelectorAll('meta[property^="og:"]');
    ogTags.forEach(tag => {
      const property = tag.getAttribute('property');
      const content = tag.getAttribute('content');
      results.openGraph[property] = content;
    });

    // 检查Twitter卡片
    const twitterTags = document.querySelectorAll('meta[name^="twitter:"]');
    twitterTags.forEach(tag => {
      const name = tag.getAttribute('name');
      const content = tag.getAttribute('content');
      results.twitter[name] = content;
    });

    // 检查结构化数据
    const structuredDataScripts = document.querySelectorAll('script[type="application/ld+json"]');
    structuredDataScripts.forEach(script => {
      try {
        const data = JSON.parse(script.textContent);
        results.structuredData.push(data);
      } catch {
        results.errors.push('Invalid JSON-LD structured data');
      }
    });

    // 检查图片
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      const imageData = {
        src: img.src,
        alt: img.alt,
        title: img.title,
        loading: img.loading,
        hasAlt: !!img.alt,
        hasTitle: !!img.title,
        isLazy: img.loading === 'lazy'
      };
      
      if (!img.alt) {
        results.warnings.push(`Image ${index + 1} missing alt attribute`);
      }
      
      results.images.push(imageData);
    });

    // 检查链接
    const links = document.querySelectorAll('a');
    links.forEach((link, index) => {
      const linkData = {
        href: link.href,
        text: link.textContent.trim(),
        title: link.title,
        target: link.target,
        rel: link.rel,
        isExternal: link.hostname !== window.location.hostname,
        hasTitle: !!link.title,
        hasText: !!link.textContent.trim()
      };
      
      if (!link.textContent.trim()) {
        results.warnings.push(`Link ${index + 1} has no text content`);
      }
      
      if (linkData.isExternal && !link.rel.includes('noopener')) {
        results.warnings.push(`External link ${index + 1} should have rel="noopener"`);
      }
      
      results.links.push(linkData);
    });

    // 检查标题层级
    for (let i = 1; i <= 6; i++) {
      const headings = document.querySelectorAll(`h${i}`);
      results.headings[`h${i}`] = {
        count: headings.length,
        texts: Array.from(headings).map(h => h.textContent.trim())
      };
    }

    // 检查H1标签
    if (results.headings.h1.count === 0) {
      results.errors.push('Missing H1 tag');
    } else if (results.headings.h1.count > 1) {
      results.warnings.push('Multiple H1 tags found');
    }

    // 性能检查
    if (window.performance) {
      const perfData = window.performance.timing;
      results.performance = {
        loadTime: perfData.loadEventEnd - perfData.navigationStart,
        domReady: perfData.domContentLoadedEventEnd - perfData.navigationStart,
        firstByte: perfData.responseStart - perfData.navigationStart
      };
      
      if (results.performance.loadTime > 3000) {
        results.warnings.push('Page load time is slow (> 3 seconds)');
      }
    }

    // 可访问性检查
    const skipLink = document.querySelector('a[href="#main-content"], a[href="#main"]');
    if (!skipLink) {
      results.suggestions.push('Consider adding a "skip to main content" link');
    }

    const focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]');
    let focusableCount = 0;
    focusableElements.forEach(el => {
      if (el.tabIndex >= 0) focusableCount++;
    });
    
    results.accessibility.focusableElements = focusableCount;

  } catch (error) {
    results.errors.push(`SEO check error: ${error.message}`);
  }

  return results;
};

// 生成SEO报告
export const generateSEOReport = () => {
  const results = checkBasicSEO();
  
  const report = {
    score: 0,
    maxScore: 100,
    grade: 'F',
    summary: {
      errors: results.errors.length,
      warnings: results.warnings.length,
      suggestions: results.suggestions.length
    },
    details: results,
    recommendations: []
  };

  // 计算分数
  let score = 100;
  
  // 错误扣分
  score -= results.errors.length * 10;
  
  // 警告扣分
  score -= results.warnings.length * 5;
  
  // 建议扣分
  score -= results.suggestions.length * 2;
  
  // 确保分数不低于0
  score = Math.max(0, score);
  
  report.score = score;
  
  // 确定等级
  if (score >= 90) report.grade = 'A';
  else if (score >= 80) report.grade = 'B';
  else if (score >= 70) report.grade = 'C';
  else if (score >= 60) report.grade = 'D';
  else report.grade = 'F';

  // 生成建议
  if (results.errors.length > 0) {
    report.recommendations.push('Fix all critical SEO errors first');
  }
  
  if (!results.title || !results.title.isOptimal) {
    report.recommendations.push('Optimize page title length (30-60 characters)');
  }
  
  if (!results.description || !results.description.isOptimal) {
    report.recommendations.push('Optimize meta description length (120-160 characters)');
  }
  
  if (Object.keys(results.openGraph).length < 4) {
    report.recommendations.push('Add more Open Graph meta tags for better social sharing');
  }
  
  if (results.structuredData.length === 0) {
    report.recommendations.push('Add structured data markup for better search visibility');
  }
  
  if (results.images.some(img => !img.hasAlt)) {
    report.recommendations.push('Add alt attributes to all images');
  }
  
  if (results.performance.loadTime > 3000) {
    report.recommendations.push('Improve page load speed');
  }

  return report;
};

// 实时SEO监控
export const startSEOMonitoring = (callback) => {
  let lastReport = null;
  
  const monitor = () => {
    const currentReport = generateSEOReport();
    
    if (!lastReport || JSON.stringify(currentReport) !== JSON.stringify(lastReport)) {
      callback(currentReport);
      lastReport = currentReport;
    }
  };
  
  // 初始检查
  monitor();
  
  // 监听DOM变化
  const observer = new MutationObserver(() => {
    clearTimeout(observer.timeout);
    observer.timeout = setTimeout(monitor, 1000);
  });
  
  observer.observe(document, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['title', 'content', 'href', 'alt', 'src']
  });
  
  return () => observer.disconnect();
};

// 导出SEO报告为JSON
export const exportSEOReport = (format = 'json') => {
  const report = generateSEOReport();
  
  if (format === 'json') {
    const dataStr = JSON.stringify(report, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `seo-report-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
  }
  
  return report;
};

export default {
  checkBasicSEO,
  generateSEOReport,
  startSEOMonitoring,
  exportSEOReport
};