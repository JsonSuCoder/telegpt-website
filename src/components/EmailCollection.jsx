import React, { useState, useEffect } from 'react';
import './EmailCollection.scss';
import { getDeviceId, markEmailCollected, validateEmail as validateEmailUtil, saveEmailToServer, saveEmailToLocal } from '../utils/emailCollection';
import successCheck from '../assets/icons/success-check.svg';
import submitArrow from '../assets/icons/submit-arrow.svg';

const EmailCollection = ({ onEmailSubmitted }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [shouldHide, setShouldHide] = useState(false);

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
  }, []);

  useEffect(() => {
    // 成功后3秒自动消失
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setShouldHide(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);



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
      const deviceId = getDeviceId();
      
      // 保存到本地存储
      saveEmailToLocal(deviceId, email);
      
      // 保存到服务器
      await saveEmailToServer({
        deviceId,
        email,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      });
      
      // 标记为已收集
      markEmailCollected(deviceId);
      
      // 显示成功状态
      setIsSubmitted(true);
      
      // 通知父组件邮箱已提交
      if (onEmailSubmitted) {
        onEmailSubmitted();
      }

    } catch (err) {
      console.error('Failed to save email:', err);
      setError('Failed to join waitlist. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // 如果应该隐藏，则不渲染组件
  if (shouldHide) {
    return null;
  }

  return (
    <div className={`email-collection-widget ${isVisible ? 'visible' : ''}`}>
      <div className="widget-card">
        <h2 className="widget-title">Join the waitlist today.</h2>
        
        {isSubmitted ? (
          <div className="success-content">
            <div className="success-icon">
              <img src={successCheck} alt="Success" />
            </div>
            <span className="success-text">Successfully joined</span>
          </div>
        ) : (
          <div className="input-section">
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`email-input ${error ? 'error' : ''}`}
                  disabled={isLoading}
                  required
                />
                <button 
                  type="submit"
                  className="submit-btn"
                  disabled={isLoading || !email.trim()}
                >
                  {isLoading ? (
                    <div className="loading-spinner">
                      <div className="spinner"></div>
                    </div>
                  ) : (
                    <img src={submitArrow} alt="Submit" />
                  )}
                </button>
              </div>
              {error && <div className="error-message">{error}</div>}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};



export default EmailCollection;