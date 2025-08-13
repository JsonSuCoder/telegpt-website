import React from 'react';
import './footer.scss';
import telegptLogo from '../assets/footer/telegpt-logo.png';
import socialIcon1 from '../assets/footer/social-icon-1.png';
import socialIcon2 from '../assets/footer/social-icon-2.png';
import socialIcon3 from '../assets/footer/social-icon-3.png';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* 主要内容区域 */}
                <div className="footer-grid">
                    {/* Logo 区域 */}
                    <div className="footer-section logo-section">
                        <div className="logo-wrapper">
                            <img src={telegptLogo} alt="TeleGPT Logo" className="footer-logo" />
                            <span className="logo-text">TeleGPT</span>
                        </div>
                    </div>
                    <div className='footer-section right-section'>
                        {/* About 区域 */}
                        <div className="footer-section about-section">
                            <h3 className="section-title">About</h3>
                            <ul className="section-links">
                                <li><a href="/privacy-policy">Privacy Policy</a></li>
                                <li><a href="#">Terms of use</a></li>
                                <li><a href="#">Community</a></li>
                            </ul>
                        </div>

                        {/* Contacts 区域 */}
                        <div className="footer-section contacts-section">
                            <h3 className="section-title">Contacts</h3>
                            <ul className="section-links">
                                <li><a href="mailto:Hi@teleGPT.org">Hi@teleGPT.org</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* 分割线 */}
                <div className="footer-divider"></div>
                {/* 社交媒体和版权区域 */}
                <div className="social-section">
                    <p className="copyright">© 2025 Telegpt Limited. All rights reserved.</p>
                    <div className="social-icons">
                        <a href="#" className="social-link">
                            <img src={socialIcon1} alt="Social Media 1" className="social-icon" />
                        </a>
                        <a href="#" className="social-link">
                            <img src={socialIcon2} alt="Social Media 2" className="social-icon" />
                        </a>
                        <a href="#" className="social-link">
                            <img src={socialIcon3} alt="Social Media 3" className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;