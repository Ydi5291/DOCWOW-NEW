import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [activeSection, setActiveSection] = useState('start')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['start', 'kontakt', 'speisekarte', 'impressum', 'datenschutz']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>DOC. WOW</h1>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#start" className={`nav-link ${activeSection === 'start' ? 'active' : ''}`}>Start</a></li>
            <li><a href="#kontakt" className={`nav-link ${activeSection === 'kontakt' ? 'active' : ''}`}>Uns kontaktieren</a></li>
            <li><a href="#speisekarte" className={`nav-link ${activeSection === 'speisekarte' ? 'active' : ''}`}>Speisekarte</a></li>
            <li><a href="#impressum" className={`nav-link ${activeSection === 'impressum' ? 'active' : ''}`}>Impressum</a></li>
            <li><a href="#datenschutz" className={`nav-link ${activeSection === 'datenschutz' ? 'active' : ''}`}>Datenschutz</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
