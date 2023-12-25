import React from "react";
import { Link } from "gatsby";
import { Layout } from "components";
import { standardContent } from "../components/layout/layout.module.css";
import { navLinkText } from "../components/sections/navigation.module.css";

const Impressum = () => {
  return (
    <Layout pageTitle="Impressum">
      <div className={standardContent}>
        <p>
          <Link to="/" className={navLinkText}>
            Zurück zur Startseite
          </Link>
        </p>
        <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
        <h3>Unternehmen</h3>
        <p>
          Hellermann Transporte e.K.
          <br />
          <b>Beschreibung: </b> Transportunternehmen
        </p>
        <h3>Eigentümer</h3>
        <p>
          Alexander Hellermann
          <br />
          Im Kleinfeld 13
          <br />
          76646 Bruchsal
        </p>

        <p>
          Handelsregister: HRA 711299
          <br />
          Registergericht: Mannheim
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: +4917619450998
          <br />
          E-Mail: info@hellermann-transporte.de
        </p>

        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:
          <br />
          358987293
        </p>

        <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </div>
    </Layout>
  );
};

export default Impressum;
