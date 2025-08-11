import React, { useState } from 'react';
import arrowRightIcon from '../assets/app-faq/arrow-right.png';
import './app-faq.scss';

const AppFaq = () => {
    const [openFaq, setOpenFaq] = useState(0); // 默认第一个FAQ展开

    const faqData = [
        {
            id: 1,
            question: "What is TeleGPT?",
            answer: {
                title: "TeleGPT is an AI copilot integrated into instant messaging platforms. It helps you summarize group messages, translate conversations, identify key information, schedule meetings, and retrieve messages intelligently — making your chats smarter and more efficient.",
                list: [

                ]
            }
        },
        {
            id: 2,
            question: "What are the main features of TeleGPT?",
            answer: {
                title: "",
                list: [
                    "Group and cross-group message summarization",
                    "Real-time translation & grammar correction",
                    "Multi-modal content summarization (images, videos, links, documents)",
                    "Chat classification and tag management",
                    "Smart search and message retrieval",
                    "Meeting scheduling assistant",
                    "Important message alerts",
                    "Personalized user insights & behavior profiling"
                ]
            }
        },
        {
            id: 3,
            question: " Is TeleGPT free to use?",
            answer: {
                title: "TeleGPT offers a 7-day free trial with full access to all key features, including summarization, translation, alerts, multi-modal AI, and more. After the trial, you can continue using limited free features or upgrade to Pro/Team for advanced capabilities.",
                list: []
            }
        },
        {
            id: 4,
            question: "What platforms are supported?",
            answer: {
                title: "Currently available on Telegram, with support for Slack, Discord, and WhatsApp coming soon.",
                list: []
            }
        },
        {
            id: 5,
            question: "Is my chat data secure?",
            answer: {
                title: "Yes. TeleGPT does not store your chat data. All processing is done in real-time with strict privacy and encryption protocols. See our Privacy Policy for details.",
                list: []
            }
        },
        {
            id: 6,
            question: "Can I customize the assistant?",
            answer: {
                title: "Absolutely. You can personalize:",
                list: [
                    "Summary keywords and formats",
                    "Alert triggers and notification types",
                    "Preferred groups and excluded chats"
                ]
            }
        },
        {
            id: 7,
            question: "How does multi-modal support work?",
            answer: {
                title: "Once enabled, TeleGPT can analyze content from images, videos, links, and attachments shared in chat and summarize or extract key details. You can turn this feature on or off anytime.",
                list: []
            }
        }
    ];

    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <div className="app-faq-container">
            <div className="faq-bottom-section">
                <h2 className="bottom-title">Still have questions？</h2>
            </div>
             <div className="faq-accordion-list">
                    {faqData.map((faq) => (
                        <div key={faq.id} className="faq-accordion-wrapper">
                            <div
                                className="faq-accordion-header"
                                onClick={() => toggleFaq(faq.id)}
                            >
                                <h3 className="faq-question">{faq.question}</h3>
                                <div className={openFaq === faq.id ? 'faq-icon rotated' : 'faq-icon'}>
                                    <img src={arrowRightIcon} alt="" />
                                </div>
                            </div>

                            {openFaq === faq.id && (
                                <div className="faq-accordion-body">
                                    <div className="faq-answer">
                                        {faq.answer.title && (
                                            <p className="answer-title">{faq.answer.title}</p>
                                        )}
                                        {faq.answer.list && faq.answer.list.length > 0 && (
                                            <ul className="answer-list">
                                                {faq.answer.list.map((item, index) => (
                                                    <li key={index} className="answer-list-item">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default AppFaq;