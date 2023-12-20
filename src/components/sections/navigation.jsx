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
          <Link to="/about" className={navLinkText}>
            About
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/404" className={navLinkText}>
            404
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
