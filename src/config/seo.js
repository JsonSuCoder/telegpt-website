// SEO配置文件
export const SEO_CONFIG = {
  // 基本信息
  siteName: 'TeleGPT',
  siteUrl: 'https://telegpt.org',
  defaultTitle: 'TeleGPT - AI Assistant for Telegram | Chat Summary, Grammar Check & Translation',
  defaultDescription: 'Transform your Telegram with AI. Get instant chat summaries, grammar checking, translation, meeting scheduling & contact management. Free to start.',
  defaultKeywords: 'telegram ai assistant, telegram bot, chat summary, grammar checker, translation bot, meeting scheduler, ai telegram, telegram automation, telegram productivity, telegram ai bot',
  
  // 社交媒体
  social: {
    twitter: '@telegpt',
    facebook: 'https://www.facebook.com/telegpt',
    linkedin: 'https://www.linkedin.com/company/telegpt'
  },
  
  // 图片
  images: {
    ogImage: 'https://telegpt.org/images/og-image.jpg',
    twitterCard: 'https://telegpt.org/assets/app-main-screen.png',
    logo: 'https://telegpt.org/logo.png'
  },
  
  // 应用信息
  app: {
    iosAppId: '6748808892',
    androidPackage: 'org.telegpt.app',
    version: '1.0'
  },
  
  // 页面特定SEO配置
  pages: {
    home: {
      title: 'TeleGPT - AI Assistant for Telegram | Chat Summary, Grammar Check & Translation',
      description: 'Transform your Telegram with AI. Get instant chat summaries, grammar checking, translation, meeting scheduling & contact management. Free to start.',
      keywords: 'telegram ai assistant, telegram bot, chat summary, grammar checker, translation bot, meeting scheduler'
    },
    features: {
      title: 'TeleGPT Features - AI Chat Summary, Grammar Check & Translation',
      description: 'Discover TeleGPT\'s powerful AI features: instant chat summaries, grammar checking, real-time translation, meeting scheduling, and contact management.',
      keywords: 'telegram features, ai chat summary, grammar check, translation, meeting scheduler, contact management'
    },
    download: {
      title: 'Download TeleGPT - Free AI Assistant for Telegram',
      description: 'Download TeleGPT for Windows, macOS, iOS, and Android. Start using AI-powered features in your Telegram chats today. Free to start.',
      keywords: 'download telegpt, telegram ai app, telegram assistant download, telegram bot download'
    },
    faq: {
      title: 'TeleGPT FAQ - Common Questions About Telegram AI Assistant',
      description: 'Find answers to common questions about TeleGPT, the AI assistant for Telegram. Learn about features, privacy, pricing, and more.',
      keywords: 'telegpt faq, telegram ai questions, telegram bot help, telegpt support'
    }
  },
  
  // 结构化数据模板
  structuredData: {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'TeleGPT',
      url: 'https://telegpt.org',
      logo: 'https://telegpt.org/logo.png',
      sameAs: [
        'https://www.facebook.com/telegpt',
        'https://twitter.com/telegpt',
        'https://www.linkedin.com/company/telegpt'
      ]
    },
    software: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'TeleGPT',
      description: 'All-in-one AI assistant for Telegram with chat summary, grammar check, translation, meeting scheduler and contact management',
      url: 'https://telegpt.org',
      applicationCategory: 'ProductivityApplication',
      operatingSystem: ['Windows', 'macOS', 'Android', 'iOS'],
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock'
      },
      featureList: [
        'AI-powered chat summarization',
        'Grammar checking and correction',
        'Multi-language translation',
        'Meeting scheduling assistant',
        'Contact profile management',
        'Action item extraction'
      ]
    }
  }
};

// SEO工具函数
export const generatePageTitle = (pageTitle, includeDefault = true) => {
  if (!includeDefault) return pageTitle;
  return pageTitle ? `${pageTitle} | ${SEO_CONFIG.siteName}` : SEO_CONFIG.defaultTitle;
};

export const generateMetaTags = (page = 'home') => {
  const pageConfig = SEO_CONFIG.pages[page] || SEO_CONFIG.pages.home;
  return {
    title: pageConfig.title,
    description: pageConfig.description,
    keywords: pageConfig.keywords,
    canonical: `${SEO_CONFIG.siteUrl}${page === 'home' ? '/' : `/${page}/`}`
  };
};

export const generateStructuredData = (type = 'software') => {
  return SEO_CONFIG.structuredData[type] || SEO_CONFIG.structuredData.software;
};

export default SEO_CONFIG;