import React, { useState, useEffect } from 'react';
import './EmailCollection.scss';
import { getDeviceId, markEmailCollected, validateEmail as validateEmailUtil, saveEmailToServer, saveEmailToLocal } from '../utils/emailCollection';

const EmailCollection = ({ onComplete }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);
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
      setError('请输入邮箱地址');
      return;
    }

    if (!validateEmailUtil(email)) {
      setError('请输入有效的邮箱地址');
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

      // 成功动画
      setIsVisible(false);
      setTimeout(() => {
        // 恢复背景滚动
        document.body.style.overflow = 'unset';
        onComplete && onComplete(email);
      }, 500);

    } catch (err) {
      console.error('邮箱收集失败:', err);
      setError('提交失败，请稍后重试');
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

            {/* <div className="footer-section">
              <p className="privacy-text">
                # {waitlistNumber}
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};



export default EmailCollection;