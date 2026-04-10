import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import aiIcon from '../assets/ai-icon.png';
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

    return (
        <header className={`header-container ${isScrolled ? 'header-scrolled' : ''}`}>
            <nav className="header-nav">
                <div className="header-logo">
                    <img src={aiIcon} alt="TelyAI" className="logo-image" />
                    <span className="logo-text">TelyAI</span>
                </div>
                <div className="header-menu">
                    <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/use-case">Use Cases</NavLink>
                    <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/pricing">Pricing</NavLink>
                    <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/skills">Skills</NavLink>
                </div>
            </nav>
        </header>
    )
};

export default Header;