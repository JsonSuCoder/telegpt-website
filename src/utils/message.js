import React from 'react';
import { createRoot } from 'react-dom/client';
import Message from '../components/Message.jsx';

// Message Manager
let messageContainer = null;
let messageId = 0;

const createMessageContainer = () => {
  if (!messageContainer) {
    messageContainer = document.createElement('div');
    messageContainer.id = 'message-container';
    messageContainer.style.position = 'fixed';
    messageContainer.style.top = '20px';
    messageContainer.style.right = '20px';
    messageContainer.style.zIndex = '9999';
    messageContainer.style.pointerEvents = 'none';
    document.body.appendChild(messageContainer);
  }
  return messageContainer;
};

const showMessage = (message, type = 'info', duration = 3000) => {
  const container = createMessageContainer();
  const messageElement = document.createElement('div');
  const currentId = ++messageId;
  messageElement.id = `message-${currentId}`;
  messageElement.style.pointerEvents = 'auto';
  messageElement.style.marginBottom = '10px';
  
  container.appendChild(messageElement);

  const removeMessage = () => {
    if (messageElement && messageElement.parentNode) {
      messageElement.parentNode.removeChild(messageElement);
    }
  };

  const root = createRoot(messageElement);
  root.render(
    React.createElement(Message, { 
      message, 
      type, 
      duration, 
      onClose: removeMessage
    })
  );
};

// Global message functions
export const message = {
  success: (msg, duration) => showMessage(msg, 'success', duration),
  error: (msg, duration) => showMessage(msg, 'error', duration),
  warning: (msg, duration) => showMessage(msg, 'warning', duration),
  info: (msg, duration) => showMessage(msg, 'info', duration)
};

export default message;