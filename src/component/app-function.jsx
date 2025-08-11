import React, { useState, useRef } from 'react';
import Lottie from 'lottie-react';
import './app-function.scss';
import summaryData from '../assets/app-function/summary.json';
import actionsItemsData from '../assets/app-function/actions.json';
import meetingData from '../assets/app-function/meeting.json';
import translateData from '../assets/app-function/translate.json';

// LottieAnimation 组件
const LottieAnimation = ({ onMouseEnter, animationData }) => {
  const lottieRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // 暴露播放和暂停方法给父组件
  const play = () => {
    if (lottieRef.current && !isPlaying) {
      setIsPlaying(true);
      lottieRef.current.setDirection(1);
      lottieRef.current.play();
    }
  };

  const playReverse = () => {
    if (lottieRef.current) {
      setIsPlaying(false);
      lottieRef.current.setDirection(-1);
      lottieRef.current.play();
    }
  };

  // 将播放控制方法传递给父组件
  React.useEffect(() => {
    if (onMouseEnter) {
      onMouseEnter.current = { play, playReverse };
    }
  }, [onMouseEnter]);

  // 监听动画完成事件
  const handleComplete = () => {
    setIsPlaying(false);
  };

  return (
    <div className="lottie-animation">
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={false}
        onComplete={handleComplete}
        style={{
          width: '100%',
          height: '100%',
          aspectRatio: '587/462',
          maxWidth: '587px'
        }}
      />
    </div>
  );
};

// 单个功能卡片组件
const FunctionCard = ({ card }) => {
  const animationRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  
  const handleCardMouseEnter = () => {
    // 清除之前的延时
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    // 添加小延时防止频繁触发
    hoverTimeoutRef.current = setTimeout(() => {
      if (animationRef.current) {
        animationRef.current.play();
      }
    }, 100);
  };

  const handleCardMouseLeave = () => {
    // 清除延时
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    // 立即反向播放动画
    if (animationRef.current) {
      animationRef.current.playReverse();
    }
  };
  
  // 清理定时器
  React.useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="function-card"
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
    >
      <div className="card-content">
        <h3 className="card-title">{card.title}</h3>
        <p className="card-description">{card.description}</p>
      </div>
      <div className="card-animation">
        <LottieAnimation onMouseEnter={animationRef} animationData={card.animationData} />
      </div>
    </div>
  );
};

const AppFunction = () => {
  // 动画数据数组，用于错开使用
  const functionCards = [
    {
      id: 1,
      title: 'Chat Summary',
      description: 'Message Summarization uses AI to extract key points from IM chats and provide regular summaries, helping users stay updated.',
      animationData: summaryData
    },
    {
      id: 2,
      title: 'Translation & Grammar Check',
      description: 'Instant Translation: Real-time translation with auto language detection.\nError Detection: Spots spelling, grammar, and structure issues.',
      animationData: translateData 
    },
    {
      id: 3,
      title: 'Meeting Scheduler',
      description: 'Automatically detects meeting chats, gathers details, and sends calendar invites—all within the conversation.',
      animationData: meetingData 
    },
    {
      id: 4,
      title: 'Action Items',
      description: 'AI picks out tasks and follow-ups from chats in real time—no manual notes needed.',
      animationData: actionsItemsData 
    }
  ];

  return (
    <div className="app-function-container">
      <div className="function-header">
        <h2 className="function-title">Never miss what matters.</h2>
      </div>
      <div className="function-cards-grid">
        {functionCards.map((card, index) => (
          <FunctionCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default AppFunction;