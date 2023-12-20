import React from "react";
import Navigation from "../sections/navigation";
import Contact from "../sections/contact";
import { footerContainer, businessInfoContainer } from "./layout.module.css";
import useSiteMetadata from "../../hooks/useSiteMetadata";

const Footer = () => {
  const { owner, businessName } = useSiteMetadata();

  return (
    <footer className={footerContainer}>
      <Navigation />
      <div className={businessInfoContainer}>
        <p>{businessName}</p>
        <p>{owner}</p>
      </div>
      <Contact />
    </footer>
  );
};

export default Footer;
