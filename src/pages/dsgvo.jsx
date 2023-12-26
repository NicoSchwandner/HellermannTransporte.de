import React from "react";
import { Link } from "gatsby";
import { Layout } from "components";
import { standardContent } from "../components/layout/layout.module.css";
import { navLinkText } from "../components/sections/navigation.module.css";

const Dsgvo = () => {
  return (
    <Layout pageTitle="Datenschutzerklärung">
      <div className={standardContent}>
        <p>
          <Link to="/" className={navLinkText}>
            Zurück zur Startseite
          </Link>
        </p>
        <h2>Datenschutzerklärung für Hellermann Transporte e.K.</h2>

        <h3>Website: hellermann-transporte.de</h3>
        <h3>Unternehmen: Hellermann Transporte e.K.</h3>

        <h4>Allgemeine Information</h4>
        <p>
          Diese Datenschutzerklärung gilt für die Website hellermann-transporte.de, betrieben von Hellermann Transporte
          e.K. Wir nehmen den Schutz Ihrer persönlichen Daten ernst und halten uns strikt an die Regeln der
          Datenschutzgesetze. Persönliche Daten werden auf dieser Webseite nicht aktiv erfasst.
        </p>

        <h4>Datenverarbeitung auf dieser Internetseite</h4>
        <p>
          Hellermann Transporte e.K. erfasst und speichert automatisch in ihren Server Log Files Informationen, die Ihr
          Browser an uns übermittelt. Dies sind:
        </p>
        <ul>
          <li>Browsertyp und Browserversion</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Referrer URL (die zuvor besuchte Seite)</li>
          <li>Hostname des zugreifenden Rechners (IP Adresse)</li>
          <li>Uhrzeit der Serveranfrage.</li>
        </ul>
        <p>
          Diese Daten sind für Hellermann Transporte e.K. nicht bestimmten Personen zuordenbar. Eine Zusammenführung
          dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
        </p>

        <h4>Cookies</h4>
        <p>Die Internetseiten verwenden keine Cookies.</p>

        <h4>Drittanbieter</h4>
        <p>
          Es gibt keine Drittanbieter-Dienste oder Plugins, die auf der Website hellermann-transporte.de genutzt werden,
          die Daten der Nutzer erfassen könnten.
        </p>

        <h4>Rechte der Nutzer</h4>
        <p>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten Daten, deren Herkunft und
          Empfänger sowie den Zweck der Datenverarbeitung. Auch haben Sie das Recht auf Berichtigung, Sperrung oder
          Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich
          jederzeit an uns wenden.
        </p>

        <h4>Datensicherheit</h4>
        <p>
          Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
          Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-Verschlüsselung. Eine Verschlüsselung
          erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem
          Schloss-Symbol in Ihrer Browserzeile.
        </p>

        <h4>Änderungen dieser Datenschutzerklärung</h4>
        <p>
          Wir behalten uns das Recht vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen
          rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung
          umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
        </p>

        <h4>Kontakt</h4>
        <p>
          Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an uns.
        </p>
      </div>
    </Layout>
  );
};

export default Dsgvo;
