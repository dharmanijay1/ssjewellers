'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('ssj-theme') || 'dark';
    setTheme(savedTheme);
  }, []);

  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    setCurrentTheme(theme);
    localStorage.setItem('ssj-theme', theme);
  };

  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      closeMenu();
    }
  };

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); smoothScroll('#home'); }}>
            <span className="logo-text">S.S. Jewellery</span>
          </a>
          <nav>
            <ul className={isMenuOpen ? 'active' : ''}>
              <li><a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); smoothScroll('#home'); }}>Home</a></li>
              <li><a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); smoothScroll('#about'); }}>About</a></li>
              <li><a href="#why-18k" className="nav-link" onClick={(e) => { e.preventDefault(); smoothScroll('#why-18k'); }}>Why 18k Gold</a></li>
              <li><a href="#collections" className="nav-link" onClick={(e) => { e.preventDefault(); smoothScroll('#collections'); }}>Collections</a></li>
              <li><a href="#partnership" className="nav-link" onClick={(e) => { e.preventDefault(); smoothScroll('#partnership'); }}>Partnership</a></li>
              <li><a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); smoothScroll('#contact'); }}>Contact</a></li>
            </ul>
          </nav>
          <div className="header-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              <i className={currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'} aria-hidden="true"></i>
            </button>
            <div className="mobile-menu" onClick={toggleMenu} aria-label="Mobile menu">
              <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'} aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}