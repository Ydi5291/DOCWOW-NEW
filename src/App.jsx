import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      
      <main className="main-content">
        {/* Section Start */}
        <section id="start" className="section">
          <div className="restaurant-header">
            <h1>DOC. WOW</h1>
            <p className="restaurant-tagline">Restaurant</p>
          </div>
          
          <div className="restaurant-info">
            <div className="info-card">
              <h2>Adresse</h2>
              <p>Büdericher Bundesstraße 68</p>
              <p>59457 Werl</p>
            </div>
            
            <div className="info-card">
              <h2>Öffnungszeiten</h2>
              <p>Montag: 17:00 - 00:00</p>
              <p>Dienstag: 17:00 - 00:00</p>
              <p>Mittwoch: 17:00 - 00:00</p>
              <p>Donnerstag: 17:00 - 00:00</p>
              <p>Freitag: 17:00 - 00:00</p>
              <p>Samstag: 17:00 - 00:00</p>
              <p>Sonntag: 17:00 - 00:00</p>
            </div>
          </div>
        </section>

        {/* Section Kontakt */}
        <section id="kontakt" className="section">
          <div className="section-header">
            <h2>Uns kontaktieren</h2>
          </div>
          <div className="restaurant-info">
            <div className="info-card">
              <h2>Kontakt</h2>
              <p>Geschäftsführer:</p>
              <p>Mostafa Saleh Mohamed Abdelhamid</p>
            </div>
            <div className="info-card">
              <h2>Telefon</h2>
              <p>+49 (0) 2922 XXX XXX</p>
              <p>Email: info@docwow.de</p>
            </div>
          </div>
        </section>

        {/* Section Speisekarte */}
        <section id="speisekarte" className="section">
          <div className="section-header">
            <h2>Speisekarte</h2>
          </div>
          <div className="restaurant-info">
            <div className="info-card">
              <h2>Vorspeisen</h2>
              <p>Bald verfügbar...</p>
            </div>
            <div className="info-card">
              <h2>Hauptgerichte</h2>
              <p>Bald verfügbar...</p>
            </div>
            <div className="info-card">
              <h2>Getränke</h2>
              <p>Bald verfügbar...</p>
            </div>
          </div>
        </section>

        {/* Section Impressum */}
        <section id="impressum" className="section">
          <div className="section-header">
            <h2>Impressum</h2>
          </div>
          <div className="restaurant-info">
            <div className="info-card">
              <h2>Angaben gemäß § 5 TMG</h2>
              <p><strong>DOC. WOW Restaurant</strong></p>
              <p>Büdericher Bundesstraße 68</p>
              <p>59457 Werl</p>
              <p>Deutschland</p>
            </div>
            <div className="info-card">
              <h2>Vertreten durch</h2>
              <p>Mostafa Saleh Mohamed Abdelhamid</p>
            </div>
          </div>
        </section>

        {/* Section Datenschutz */}
        <section id="datenschutz" className="section">
          <div className="section-header">
            <h2>Datenschutz</h2>
          </div>
          <div className="restaurant-info">
            <div className="info-card">
              <h2>Datenschutzerklärung</h2>
              <p>Der Schutz Ihrer persönlichen Daten ist uns wichtig.</p>
              <p>Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten.</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default App
