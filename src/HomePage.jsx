import React , {useState,useEffect} from 'react';

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
import EmailCollection from './components/EmailCollection';
import { checkEmailCollected } from './utils/emailCollection';
import { message } from './utils/message';

const HomePage = () => {
  const [showEmailCollection, setShowEmailCollection] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 检查是否需要显示邮箱收集页面
    const checkEmailStatus = async () => {
      try {
        const hasCollected = checkEmailCollected();
        
        if (!hasCollected) {
          setShowEmailCollection(true);
        }
      } catch (error) {
        console.error('检查邮箱状态失败:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkEmailStatus();
  }, []);

  const handleEmailCollectionComplete = (email) => {
    console.log('邮箱收集完成:', email);
    setShowEmailCollection(false);
    
    // 可以在这里添加欢迎消息或其他逻辑
    setTimeout(() => {
      message.success(`Welcome ${email}! Thank you for your interest.`);
    }, 500);
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <>
      {showEmailCollection && (
        <EmailCollection onComplete={handleEmailCollectionComplete} />
      )}
      
      {/* 原有的主页内容 */}
      <SEOHead page="home" structuredDataType="software" />
      <SEOTools />
      
      <div className="home-page">
        <Header />
        <main className="main-content">
          <AppDownload />
          <AppFunction />
          <AppFeature />
          <UserFeedback />
          <AppFaq />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;