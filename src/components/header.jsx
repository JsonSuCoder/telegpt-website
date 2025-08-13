import React, { useState, useEffect } from 'react';
import logoPath from '../assets/logo.png';
import './header.scss';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <nav className="header-nav">
                <div className="header-logo">
                    <img src={logoPath} alt="Telegpt" className="logo-image" />
                    <span className="logo-text">TeleGPT</span>
                </div>
                <div className="header-menu">
                    <a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
                    <a href="#features" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a>
                    <a href="#faq" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>FAQ</a>
                    <a href="#download" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('download'); }}>Download</a>
                </div>
            </nav>
        </header>
    )
};

export default Header;