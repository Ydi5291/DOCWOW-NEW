import React, { useState, useEffect } from 'react';
import './Header.css';
function Header(props) {
  const [activeSection, setActiveSection] = useState('kontakt');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['kontakt', 'speisekarte', 'impressum', 'datenschutz'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-row">
          <h1 className="restaurant-title logo">DOC WOW</h1>
        </div>
        <div className="header-content">
          <p className="welcome-message animated-welcome">Sie sind herzlich willkommen bei PIZZA WOW</p>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#kontakt" className={`nav-link ${activeSection === 'kontakt' ? 'active' : ''}`}>Uns kontaktieren</a></li>
            <li>
              <button
                type="button"
                className="nav-link"
                style={{ scrollBehavior: 'smooth', background: 'none' }}
                onClick={() => {
                  const el = document.getElementById('bestellung-card');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Bestellen
              </button>
            </li>
            <li><a href="#speisekarte" className={`nav-link ${activeSection === 'speisekarte' ? 'active' : ''}`}>Speisekarte</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
