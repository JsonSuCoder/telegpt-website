import React, { useState, useEffect } from 'react';
import './Message.scss';

const Message = ({ message, type = 'info', duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        onClose && onClose();
      }, 300); // Wait for animation to complete
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      onClose && onClose();
    }, 300);
  };

  if (!message) return null;

  return (
    <div className={`message-overlay ${visible ? 'visible' : ''}`}>
      <div className={`message-container ${type}`}>
        <div className="message-content">
          <span className="message-text">{message}</span>
          <button className="message-close" onClick={handleClose}>
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;