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


const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      
      {/* Home/Download section */}
      <section id="home">
        <div id="download">
          <AppDownload />
        </div>
      </section>

      <AppFunction />
      
      {/* User Feedback section */}
      <section>
        <UserFeedback />
      </section>
      
      {/* Features section */}
      <section id="features">
        <AppFeature />
      </section>
      
      {/* FAQ section */}
      <section id="faq">
        <AppFaq />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;