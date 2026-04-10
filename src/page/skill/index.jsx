import React from 'react';
import { 
  Terminal, 
  List, 
  FileText, 
  AlertTriangle, 
  Users, 
  Send, 
  Globe,
  Info
} from 'lucide-react';
import Footer from '../../components/footer';
import './index.scss';

const skills = [
  {
    id: 'chat-list',
    title: '会话列表',
    description: '获取 TelyAI 当前加载的所有会话，返回 chatId 和标题列表。',
    icon: <List size={24} />,
    command: '/telyai chat-list'
  },
  {
    id: 'summary',
    title: '群消息摘要',
    description: '对指定 Telegram 群组的近期消息生成 AI 摘要，支持超时设置。',
    icon: <FileText size={24} />,
    command: '/telyai summary --chatid <ID>'
  },
  {
    id: 'urgent-check',
    title: '关键词紧急监测',
    description: '检测指定群组近期消息中是否包含某个话题关键词。',
    icon: <AlertTriangle size={24} />,
    command: '/telyai urgent-check --chatid <ID> --rule <关键词>'
  },
  {
    id: 'get-contacts',
    title: '获取联系人',
    description: '获取 Telegram 联系人列表，返回用户 ID、用户名、姓名及电话。',
    icon: <Users size={24} />,
    command: '/telyai get-contacts'
  },
  {
    id: 'send-message',
    title: '发送消息',
    description: '向指定 Telegram 会话发送文本消息。这是发送消息的唯一推荐方式。',
    icon: <Send size={24} />,
    command: '/telyai send-message --chatid <ID> --text <内容>'
  },
  {
    id: 'get-group-members',
    title: '获取群成员',
    description: '获取指定群组或频道的成员列表，包含管理员和群主信息。',
    icon: <Users size={24} />,
    command: '/telyai get-group-members --chatid <ID>'
  },
  {
    id: 'global-summary',
    title: '全局消息摘要',
    description: '对所有会话的消息生成全局 AI 摘要，支持按时间范围筛选。',
    icon: <Globe size={24} />,
    command: '/telyai global-summary --hours 24'
  }
];

export const SkillPage = () => {
  return (
    <div className="skill-container">
      <main className="skill-page">
        <header className="header">
          <h1>TelyAI 技能中心</h1>
          <p>强大的 Telegram 自动化工具集，支持消息摘要、全局概览及紧急监测等功能。</p>
        </header>

        <section id="installation">
          <h2>GitHub 手动安装</h2>
          <div className="install-section">
            <div className="install-step">
              <h3>1. 进入技能工作区</h3>
              <div className="code-block">
                <code>cd ~/.openclaw/workspace/skills</code>
              </div>
            </div>
            <div className="install-step">
              <h3>2. 克隆技能仓库</h3>
              <div className="code-block">
                <code>git clone https://github.com/JsonSuCoder/telyai.git</code>
              </div>
            </div>
            
            <div className="warning-box">
              <Info className="warning-icon" size={20} />
              <div className="warning-content">
                <h4>工作原理</h4>
                <p>这些技能通过本地运行的 TelyAI 桌面应用进行交互。脚本通过临时文件与应用通信，确保了极高的执行效率和安全性。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features">
          <h2>支持的功能</h2>
          <div className="skill-grid">
            {skills.map((skill) => (
              <div key={skill.id} className="skill-card">
                <div className="card-header">
                  <div className="icon-wrapper">
                    {skill.icon}
                  </div>
                  <h3>{skill.title}</h3>
                </div>
                <p className="description">{skill.description}</p>
                <div className="usage">
                  <div className="usage-label">示例命令</div>
                  <div className="command-preview">
                    {skill.command}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};