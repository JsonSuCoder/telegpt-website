import React from 'react';
import { 
  LayoutDashboard, 
  MessageSquareText, 
  CheckSquare, 
  CalendarDays, 
  Languages, 
  BellRing, 
  UserCircle, 
  Image as ImageIcon, 
  FileText, 
  Video, 
  Mic, 
  Tags 
} from 'lucide-react';
import Footer from '../../components/footer';
import './index.scss';

const useCases = [
  {
    id: 'global-chat-summary',
    title: '全局消息总结',
    description: '每日定时发送总结简报，不错过任何重要信息。',
    icon: <LayoutDashboard size={24} />,
    category: '总结'
  },
  {
    id: 'chat-summary',
    title: '房间消息总结',
    description: '快速掌握群聊核心内容，节省阅读时间。',
    icon: <MessageSquareText size={24} />,
    category: '总结'
  },
  {
    id: 'action-items',
    title: '待办事项提醒',
    description: '智能提取对话中的待办事项，自动提醒不遗漏。',
    icon: <CheckSquare size={24} />,
    category: '效率'
  },
  {
    id: 'schedule-meeting',
    title: 'AI 预定会议',
    description: '通过对话自动安排会议日程，化繁为简。',
    icon: <CalendarDays size={24} />,
    category: '效率'
  },
  {
    id: 'translate',
    title: '聊天消息翻译',
    description: '打破语言隔阂，实时翻译多语种对话内容。',
    icon: <Languages size={24} />,
    category: '智能'
  },
  {
    id: 'chat-urgent',
    title: '消息紧急提醒',
    description: '智能识别重要及紧急信息，及时送达提醒。',
    icon: <BellRing size={24} />,
    category: '效率'
  },
  {
    id: 'user-portrait',
    title: '用户画像',
    description: '根据互动深度分析用户特征，提供个性化服务建议。',
    icon: <UserCircle size={24} />,
    category: '智能'
  },
  {
    id: 'image-summary',
    title: '图片总结',
    description: '智能识别并总结图片中的关键文字与核心信息。',
    icon: <ImageIcon size={24} />,
    category: '多媒体'
  },
  {
    id: 'file-summary',
    title: '文件总结',
    description: '快速提炼 PDF、Word 等文件大纲与关键论点。',
    icon: <FileText size={24} />,
    category: '多媒体'
  },
  {
    id: 'video-summary',
    title: '视频总结',
    description: '解析视频内容并生成精简摘要，大幅提升信息获取效率。',
    icon: <Video size={24} />,
    category: '多媒体'
  },
  {
    id: 'audiototext',
    title: '语音转文本',
    description: '将语音消息精准转化为文本，并可进行后续智能处理。',
    icon: <Mic size={24} />,
    category: '智能'
  },
  {
    id: 'tag-classification',
    title: '标签分类',
    description: '根据房间会话内容自动打标，实现高效内容分类管理。',
    icon: <Tags size={24} />,
    category: '智能'
  }
];

export const UseCasePage = () => {
  return (
    <div className="use-case-container">
      <main className="use-case-page">
        <header className="header">
          <h1>用例与功能</h1>
          <p>TelyAI 为您的工作与交流提供全方位的智能支持，从消息总结到效率自动化，应有尽有。</p>
        </header>

        <div className="use-case-grid">
          {useCases.map((item) => (
            <div key={item.id} className="use-case-card">
              <div className="icon-wrapper">
                {item.icon}
              </div>
              <span className="category">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};