import React from "react";
import { headerContainer, titleLogo } from "./layout.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { PhoneButton } from "components";
import useSiteMetadata from "../../hooks/useSiteMetadata";

const Header = ({ pageTitle }) => {
  const { phoneNumber } = useSiteMetadata();

  return (
    <header className={headerContainer}>
      <StaticImage src="../../images/logo.png" alt={pageTitle} className={titleLogo} />
      <PhoneButton phoneNumber={phoneNumber} fontSize={"30px"} />
    </header>
  );
};

export default Header;
