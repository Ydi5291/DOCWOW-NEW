import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Impressum from './components/Impressum';
import AGB from './components/AGB';

function MainPage() {
  return (
    <>
      <main className="main-content">
        {/* Section Kontakt */}
        <section id="kontakt" className="section">
          <div className="section-header">
            <h2>Uns kontaktieren</h2>
          </div>
          <div className="restaurant-info">
            <div className="info-card address-card">
              <h2>Adresse</h2>
              <p>Büdericher Bundesstraße 68</p>
              <p>59457 Werl, Deutschland</p>
              <div className="address-actions">
                <a
                  href="https://www.google.com/maps/place/Büdericher+Bundesstraße+68,+59457+Werl,+Deutschland/@51.5530,7.9150,17z/data=!3m1!4b1!4m6!3m5!1s0x47b8c5e8c5e8c5e8:0x5e8c5e8c5e8c5e8!8m2!3d51.5530!4d7.9150!16s%2Fg%2F11c5q8q8q8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  📍 Voir sur Google Maps
                </a>
                <a
                  href="https://www.google.com/maps/dir//Büdericher+Bundesstraße+68,+59457+Werl,+Deutschland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="route-link"
                >
                  🚗 Itinéraire
                </a>
              </div>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.5!2d7.915!3d51.553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMzJzEwLjgiTiA3wrA1NCc1NC4wIkU!5e0!3m2!1sfr!2sde!4v1640000000000!5m2!1sfr!2sde"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DOC. WOW Restaurant Location"
                ></iframe>
              </div>
            </div>
            <div className="info-card">
              <h2>Öffnungszeiten</h2>
              <p>Montag: 17:00 - 00:00</p>
              <p>Dienstag: 17:00 - 00:00</p>
              <p>Mittwoch: Geschlossen</p>
              <p>Donnerstag: 17:00 - 00:00</p>
              <p>Freitag: 17:00 - 00:00</p>
              <p>Samstag: 17:00 - 00:00</p>
              <p>Sonntag: 17:00 - 22:00</p>
            </div>
            <div className="info-card">
              <h2>Kontakt</h2>
              <p>Geschäftsführer:</p>
              <p>Mostafa Saleh Mohamed Abdelhamid</p>
              <p><strong>Telefon:</strong> 02922/9590385</p>
              <p><strong>Email:</strong> info@docwow.de</p>
            </div>
            <div className="info-card bestellung-card" id="bestellung-card">
              <h2>Bestellungen</h2>
              <p>Möchten Sie eine Bestellung aufgeben?</p>
              <p>Kontaktieren Sie uns gerne per:</p>
              <div className="contact-options">
                <a
                  href="tel:029229590385"
                  className="contact-btn phone-btn"
                >
                  📞 Telefon anrufen
                </a>
                <span className="oder-text">oder</span>
                <a
                  href="https://wa.me/491785450135?text=Hallo%20DOC.%20WOW,%20ich%20möchte%20gerne%20eine%20Bestellung%20aufgeben."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn whatsapp-btn"
                >
                  💬 WhatsApp
                </a>
              </div>
              <div className="opening-note">
                <p><em>Bestellungen sind während unserer Öffnungszeiten möglich</em></p>
                <p style={{ color: '#48bb78', fontWeight: 600, marginTop: '0.5rem' }}>Gratis Lieferung ab 15,00&nbsp;€</p>
              </div>
            </div>
          </div>
        </section>
        {/* Section Speisekarte */}
        <section id="speisekarte" className="section">
          <div className="section-header">
            <h2>Speisekarte</h2>
          </div>
          <div className="restaurant-info">
            <a
              href="/DOCWOW-NEW/speisekarte.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-pdf-link"
            >
              📄 Unsere Speisekarte als PDF ansehen
            </a>
          </div>
        </section>
      </main>
      <ScrollToTopButton />
    </>
  );
}

import { useLocation } from 'react-router-dom';

function App() {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showAGB, setShowAGB] = useState(false);

  const handleToggleImpressum = () => {
    setShowImpressum((prev) => !prev);
    setShowAGB(false);
  };
  const handleToggleAGB = () => {
    setShowAGB((prev) => !prev);
    setShowImpressum(false);
  };

  return (
    <>
      <Header 
        onImpressumClick={handleToggleImpressum} 
        onAGBClick={handleToggleAGB} 
      />
      <MainPage />
      {showImpressum && <Impressum />}
      {showAGB && <AGB />}
      <Footer 
        onImpressumClick={handleToggleImpressum} 
        onAGBClick={handleToggleAGB} 
      />
    </>
  );
}

export default App;

