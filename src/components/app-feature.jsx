import React from 'react';
import './app-feature.scss';

// Import feature icons
import securityIcon from '../assets/app-feature/security-icon.png';
import telegramIcon from '../assets/app-feature/telegram-icon.png';
import aiIcon from '../assets/app-feature/ai-icon.png';

const AppFeature = () => {
    return (
        <div className="app-feature-container">
            <div className="feature-header">
                <h2 className="feature-main-title">Why TeleGPT？</h2>
                <h3 className="feature-subtitle">It's Smart, Secure & Convenient!</h3>
            </div>

            <div className="feature-cards-grid">
                {/* Powered by Telegram Card */}
                <div className="feature-card">
                    <div className="card-icon">
                        <img src={telegramIcon} alt="Telegram" className="feature-icon" />
                    </div>
                    <h4 className="card-title">Powered by Telegram</h4>
                    <p className="card-description">
                        Telegpt is the best way to enjoy everything Telegram has to offer without any restrictions. It uses an open source Telegram API and supports updates from the official client, giving you full access while still on your favorite messaging app!
                    </p>
                </div>
                {/* Private & Secure Card */}
                <div className="feature-card">
                    <div className="card-icon">
                        <img src={securityIcon} alt="Security" className="feature-icon" />
                    </div>
                    <h4 className="card-title">Private & Secure</h4>
                    <p className="card-description">
                        The information you send via the Telegpt messenger is encrypted and stored on Telegram servers to ensure your safety. We do not collect any personal data, so there's no need for concern!
                    </p>
                </div>

                {/* AI-enabled IM Card */}
                <div className="feature-card">
                    <div className="card-icon ai-icon">
                        <img src={aiIcon} alt="telegpt" className="feature-icon" />
                    </div>
                    <h4 className="card-title">AI-enabled IM</h4>
                    <p className="card-description">
                        With intelligent summarization, smart replies, task extraction, content search, meeting scheduling, and image understanding, AI helps you focus on what matters — cutting through the noise, boosting productivity, and enhancing collaboration across every chat.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AppFeature;