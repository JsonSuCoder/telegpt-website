import React from 'react';

import './home-page.scss';
import Header from './components/header';
import AppDownload from './components/app-download';
import AppFunction from './components/app-function';
// import ChatSummary from './components/chat-summary';
import UserFeedback from './components/user-feedback';
import AppFeature from './components/app-feature';
import AppFaq from './components/app-faq';
import Footer from './components/footer';
import SEOHead from './components/SEOHead';
import SEOTools from './components/SEOTools';
// import EmailCollection from './components/EmailCollection';

const HomePage = () => {
  return (
    <>
      {/* <EmailCollection  /> */}
      {/* 原有的主页内容 */}
      <SEOHead page="home" structuredDataType="software" />
      <SEOTools />

      <div className="home-page">
        <Header />
        <main className="main-content">
          <section id="home" aria-labelledby="hero-heading">
            <AppDownload />
          </section>
          <section id="functions" aria-labelledby="functions-heading">
            <AppFunction />
          </section>
          <section id="testimonials" aria-labelledby="testimonials-heading">
            <UserFeedback />
          </section>
          <section id="features" aria-labelledby="features-heading">
            <AppFeature />
          </section>
          <section id="faq" aria-labelledby="faq-heading">
            <AppFaq />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;