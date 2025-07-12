import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>DOC. WOW</h3>
            <p>Büdericher Bundesstraße 68</p>
            <p>59457 Werl</p>
          </div>
          
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><a href="#start">Start</a></li>
              <li><a href="#kontakt">Uns kontaktieren</a></li>
              <li><a href="#speisekarte">Speisekarte</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Rechtliches</h4>
            <ul className="footer-links">
              <li><a href="#impressum">Impressum</a></li>
              <li><a href="#datenschutz">Datenschutz</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 DOC. WOW - Alle Rechte vorbehalten</p>
          <p>Inhaber: Mostafa Saleh Mohamed Abdelhamid</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
