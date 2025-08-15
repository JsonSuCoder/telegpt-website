import React, { useState, useEffect } from 'react';
import './EmailCollection.scss';
import { getDeviceId, markEmailCollected, validateEmail as validateEmailUtil, saveEmailToServer, saveEmailToLocal } from '../utils/emailCollection';

const EmailCollection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  // const [waitlistNumber, setWaitlistNumber] = useState(126);

  // 获取邮箱总数
  // const fetchEmailCount = useCallback(async () => {
  //   try {
  //     const response = await getAllEmailData();
  //     if (response.code === 0  && response.data) {
  //       setWaitlistNumber(response.data.length + 126);
  //     }
  //   } catch (error) {
  //     console.error('获取邮箱总数失败:', error);
  //     // 使用默认值126
  //   }
  // }, []);

  useEffect(() => {
    // 添加入场动画
    setTimeout(() => setIsVisible(true), 100);
    
    // 禁用背景滚动
    document.body.style.overflow = 'hidden';
    
    // 调用获取邮箱总数函数
    // fetchEmailCount();
    
    // 清理函数：组件卸载时恢复滚动
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmailUtil(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      // 获取设备唯一标识和用户IP
      const deviceId = getDeviceId();
      
      const emailData = {
        email: email.trim(),
        deviceId: deviceId,
        userAgent: navigator.userAgent
      };
      
      // 尝试保存到服务器
      try {
        await saveEmailToServer(emailData);
      } catch (serverError) {
        console.warn('服务器保存失败，使用本地存储:', serverError);
        saveEmailToLocal(emailData);
      }

      // 标记该设备已收集过邮箱
      markEmailCollected(email.trim());

      // 显示成功状态，不隐藏卡片
      setIsSuccess(true);
      // 不调用 onComplete，防止用户进入主页

    } catch (err) {
      console.error('邮箱收集失败:', err);
      setError('Submission failed. Please try again later');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`email-collection-overlay ${isVisible ? 'visible' : ''}`}>
      <div className="email-collection-container">
        <div className="collection-card">
          {/* 装饰性背景 */}
          <div className="card-background">
            <div className="bg-circle circle-1"></div>
            <div className="bg-circle circle-2"></div>
            <div className="bg-circle circle-3"></div>
          </div>

          {/* 主要内容 */}
          <div className="card-content">
            <div className="header-section">
              <div className="icon-wrapper">
                <svg className="email-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h1 className="main-title">TeleGPT</h1>
              <p className="subtitle">
                Supercharge your Telegram Chats
              </p>
              <p className="subtitle">
                Smart, Secure & Privacy First
              </p>
            </div>

            {isSuccess ? (
              <div className="success-message">
                <div className="success-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h2>Join the waitinglist success</h2>
                <p>Thank you for your interest! We'll notify you when TeleGPT is ready.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="email-form">
                <div className="input-group">
                  <div className="input-wrapper">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Please enter your email address"
                      className={`email-input ${error ? 'error' : ''}`}
                      disabled={isLoading}
                    />
                  </div>
                  {error && <span className="error-message">{error}</span>}
                </div>

                <button 
                  type="submit" 
                  className={`submit-button ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="loading-spinner">
                      <div className="spinner"></div>
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    <>
                      <span>Join the waitlist</span>
                      <svg className="arrow-icon" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
                
            <div className="footer-section">
              <a className="privacy-text" href="/privacy">Privacy Policy</a>
              {/* <p className="privacy-text">
                # {waitlistNumber}
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default EmailCollection;