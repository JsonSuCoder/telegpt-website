import React from 'react';
import './user-feedback.scss';

// Import user avatars
import userAvatar1 from '../assets/user-feedback/user-avatar-1.png';
import userAvatar2 from '../assets/user-feedback/user-avatar-2.png';
import userAvatar3 from '../assets/user-feedback/user-avatar-3.png';
import userAvatar4 from '../assets/user-feedback/user-avatar-4.png';
import userAvatar5 from '../assets/user-feedback/user-avatar-5.png';
import userAvatar6 from '../assets/user-feedback/user-avatar-6.png';

const UserFeedback = () => {
    const feedbackData = [
        {
            id: 1,
            name: "Morgan",
            avatar: userAvatar2,
            feedback: "I'm in way too many groups—skip a day and there are thousands of messages. I set up a few keywords like \"airdrop,\" \"KOL mentioned,\" or \"project AMA,\" and the AI alerts me whenever those pop up. You can even choose between a soft or strong notification. Pretty smart, honestly."
        },
        {
            id: 2,
            name: "MR",
            avatar: userAvatar5,
            feedback: "I'm in 30 or 40 groups—mostly project chats and market updates—and the messages fly non-stop. This bot pulls out the key info every now and then, even sorts it by topic. Honestly, I've almost forgotten what it feels like to miss out on a hot lead."
        },
        {
            id: 3,
            name: "Vincent Hong",
            avatar: userAvatar4,
            feedback: "Woke up to 400+ unread messages.Telegpt summarized the key alpha, extracted the contract address, and even translated the founder's rant."
        },
        {
            id: 4,
            name: "EI Habib",
            avatar: userAvatar1,
            feedback: "Our team has calls with two or three projects every week, and someone always used to miss the time or forget the notice. Now I just tell the bot in the group to schedule it, and everyone gets the info automatically—no more excuses."
        },
        {
            id: 5,
            name: "Samia Zr",
            avatar: userAvatar3,
            feedback: "I'm a bit socially anxious, so I rarely speak in group chats—mostly just lurk and scroll like I'm sneaking around. This tool posts daily summaries right in the group, which is perfect for people like me who prefer to stay quiet but still want to stay in the loop."
        },
        {
            id: 6,
            name: "Janson Phillips",
            avatar: userAvatar6,
            feedback: "What I love most is how it summarizes individual group chats. For those days when I'm too busy to check in, it gives me a one-line update on what went down—and I can click in for more details if I want. Perfect for someone like me who hates missing anything important."
        }
    ];

    return (
        <div className="user-feedback-container">
            <div className="feedback-header">
                <h2 className="feedback-title">They all chat smarter with TeleGPT.</h2>
            </div>
            
            <div className="feedback-grid">
                {feedbackData.map((item) => (
                    <div key={item.id} className={`feedback-card card-${item.id}`}>
                        <div className="user-info">
                            <div className="avatar-wrapper">
                                <img src={item.avatar} alt={item.name} className="user-avatar" />
                            </div>
                            <span className="user-name">{item.name}</span>
                        </div>
                        <p className="feedback-text">{item.feedback}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserFeedback;