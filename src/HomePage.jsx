import React from 'react';

import './home-page.scss';
import Header from './component/header';
import AppDownload from './component/app-download';
import AppFunction from './component/app-function'; 
// import ChatSummary from './component/chat-summary';
import UserFeedback from './component/user-feedback';
import AppFeature from './component/app-feature';
import AppFaq from './component/app-faq';
import Footer from './component/footer';
import SEOHead from './components/SEOHead';
import SEOTools from './components/SEOTools';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Head管理 */}
      <SEOHead 
        page="home"
        structuredDataType="software"
      />
      {/* SEO工具和优化 */}
      <SEOTools />
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50">
        Skip to main content
      </a>
      
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <main id="main-content" role="main">
        {/* Hero/Download section */}
        <section id="home" aria-labelledby="hero-heading">
          <div id="download">
            <AppDownload />
          </div>
        </section>

        {/* Functions section */}
        <section id="functions" aria-labelledby="functions-heading">
          <AppFunction />
        </section>
        
        {/* User Feedback section */}
        <section id="testimonials" aria-labelledby="testimonials-heading">
          <UserFeedback />
        </section>
        
        {/* Features section */}
        <section id="features" aria-labelledby="features-heading">
          <AppFeature />
        </section>
        
        {/* FAQ section */}
        <section id="faq" aria-labelledby="faq-heading">
          <AppFaq />
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;