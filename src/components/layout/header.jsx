import React from "react";
import { Link } from "gatsby";
import { headerContainer, titleLogo, header } from "./layout.module.css";
import { navLinkText } from "../sections/navigation.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { PhoneButton } from "components";
import useSiteMetadata from "../../hooks/useSiteMetadata";

const Header = ({ pageTitle }) => {
  const { phoneNumber } = useSiteMetadata();

  return (
    <header className={headerContainer}>
      <div className={header}>
        <Link to="/" className={navLinkText}>
          <StaticImage src="../../images/logo.png" alt={pageTitle} className={titleLogo} />
        </Link>
        <PhoneButton phoneNumber={phoneNumber} fontSize={"30px"} />
      </div>
    </header>
  );
};

export default Header;
