import React from "react";
import { Link } from "gatsby";
import { navLinks, navLinkItem, navLinkText } from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            Home
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/dsgvo" className={navLinkText}>
            Datenschutzerklärung
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/impressum" className={navLinkText}>
            Impressum
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
