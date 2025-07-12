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
            <p className="restaurant-tagline animated-welcome">Sie sind herzlich willkommen bei DOC. WOW</p>
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
                  style={{border: 0}}
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
              <p><strong>Telefon:</strong> +49 (0) 2922 XXX XXX</p>
              <p><strong>Email:</strong> info@docwow.de</p>
            </div>
            
            <div className="info-card bestellung-card">
              <h2>Bestellungen</h2>
              <p>Möchten Sie eine Bestellung aufgeben?</p>
              <p>Kontaktieren Sie uns gerne per:</p>
              
              <div className="contact-options">
                <a 
                  href="tel:+4929228888888" 
                  className="contact-btn phone-btn"
                >
                  📞 Telefon anrufen
                </a>
                
                <span className="oder-text">oder</span>
                
                <a 
                  href="https://wa.me/4929228888888?text=Hallo%20DOC.%20WOW,%20ich%20möchte%20gerne%20eine%20Bestellung%20aufgeben."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn whatsapp-btn"
                >
                  💬 WhatsApp
                </a>
              </div>
              
              <div className="opening-note">
                <p><em>Bestellungen sind während unserer Öffnungszeiten möglich</em></p>
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
              <br />
              <p><strong>Vertreten durch:</strong></p>
              <p>Mostafa Saleh Mohamed Abdelhamid</p>
              <br />
              <p><strong>Kontakt:</strong></p>
              <p>Telefon: +49 2922 9778866</p>
              <p>E-Mail: info@docwow-werl.de</p>
            </div>
            <div className="info-card">
              <h2>Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
              <p><em>wird nachgereicht</em></p>
              <br />
              <p><strong>Aufsichtsbehörde:</strong></p>
              <p>Ordnungsamt Werl</p>
              <p>Melsterstraße 11</p>
              <p>59457 Werl</p>
            </div>
            <div className="info-card">
              <h2>Streitschlichtung</h2>
              <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:</p>
              <p><a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a></p>
              <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
              <br />
              <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </div>
            <div className="info-card">
              <h2>Haftung für Inhalte</h2>
              <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
              <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.</p>
            </div>
          </div>
        </section>

        {/* Section Datenschutz */}
        <section id="datenschutz" className="section">
          <div className="section-header">
            <h2>Datenschutzerklärung</h2>
          </div>
          <div className="restaurant-info">
            <div className="info-card">
              <h2>1. Datenschutz auf einen Blick</h2>
              <p><strong>Allgemeine Hinweise</strong></p>
              <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
              <br />
              <p><strong>Datenerfassung auf dieser Website</strong></p>
              <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
            </div>
            <div className="info-card">
              <h2>2. Hosting und Content Delivery Networks (CDN)</h2>
              <p><strong>GitHub Pages</strong></p>
              <p>Wir hosten die Inhalte unserer Website bei GitHub Pages. Anbieter ist die GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA (nachfolgend GitHub).</p>
              <p>Wenn Sie unsere Website besuchen, erfasst GitHub verschiedene Logfiles inklusive Ihrer IP-Adressen.</p>
              <p>Die Nutzung von GitHub Pages erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.</p>
            </div>
            <div className="info-card">
              <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
              <p><strong>Datenschutz</strong></p>
              <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
              <br />
              <p><strong>Hinweis zur verantwortlichen Stelle</strong></p>
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <p>DOC. WOW Restaurant<br />
              Mostafa Saleh Mohamed Abdelhamid<br />
              Büdericher Bundesstraße 68<br />
              59457 Werl<br />
              Telefon: +49 2922 9778866<br />
              E-Mail: info@docwow-werl.de</p>
            </div>
            <div className="info-card">
              <h2>4. Datenerfassung auf dieser Website</h2>
              <p><strong>Server-Log-Dateien</strong></p>
              <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
              <ul style={{textAlign: 'left', margin: '1rem 0'}}>
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
            </div>
            <div className="info-card">
              <h2>5. Ihre Rechte</h2>
              <p>Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.</p>
              <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>
              <p>Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
            </div>
            <div className="info-card">
              <h2>6. Kontaktformular und Telefon/WhatsApp</h2>
              <p>Wenn Sie uns per Telefon oder WhatsApp kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.</p>
              <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.</p>
              <p>Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default App
