import * as React from "react";
import { Link } from "gatsby";
import { Layout } from "components";
import { standardContent } from "../components/layout/layout.module.css";
import { navLinkText } from "../components/sections/navigation.module.css";

function NotFoundPage() {
  return (
    <Layout pageTitle="Diese Seite haben wir noch nicht" pathName="404">
      <div className={standardContent}>
        <p>
          Das tut uns leid! 😔
          <br />
          <br />
          Falls du denkst, dass das ein Fehler ist, dann melde dich gerne bei uns!
          <br />
          <br />
          <Link to="/" className={navLinkText}>
            Zurück zur Startseite
          </Link>
        </p>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
