import React from "react";
import "./Impressum.css";

export default function Impressum() {
  return (
    <div className="impressum-page main-content">
      <h1>Impressum</h1>

      <section>
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          DOC.WOW<br />
          Büdericher Bundesstraße 68<br />
          59457 Werl, Deutschland
        </p>
      </section>

      <section>
        <h2>Vertreten durch</h2>
        <p>Mostafa Saleh Mohamed Abdelhamid</p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          Telefon: 02922 / 9590385<br />
          E-Mail: <a href="mailto:info@docwow.de">info@docwow.de</a>
        </p>
      </section>

      <section>
        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
          DE123456789
        </p>
      </section>

      <section>
        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
          diesen Seiten nach den allgemeinen Gesetzen verantwortlich. ...
        </p>
      </section>

      <section>
        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. ...
        </p>
      </section>

      <section>
        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. ...
        </p>
      </section>
    </div>
  );
}

