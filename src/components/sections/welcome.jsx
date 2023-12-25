import React from "react";
import {
  backgroundImage,
  profileImage,
  weclomeContainer,
  welcomeText,
  welcomeTitle,
  welcomePhoneNumber,
  noDefaultUnderline,
  sectionContainer,
  callToActionText,
} from "./welcome.module.css";
import profilePicture from "../../images/profile.png";
import { iconButtonSecondary } from "../iconButtons/iconButton.module.css";
import useSiteMetadata from "../../hooks/useSiteMetadata";
import Activities from "./activities";

const Welcome = () => {
  const { phoneNumber } = useSiteMetadata();

  // const data = useStaticQuery(graphql`
  //   query {
  //     profilePicture: file(relativePath: { eq: "profile.png" }) {
  //       childImageSharp {
  //         gatsbyImageData(width: 200, layout: CONSTRAINED)
  //       }
  //     }
  //   }
  // `);

  // const image = getImage(data.profilePicture);

  return (
    <div className={weclomeContainer}>
      <div style={{ "--background-image": `url(${profilePicture})` }} className={`${backgroundImage} ${profileImage}`}>
        <p className={welcomeTitle}>Willkommen bei Hellermann Transporte e.K.</p>
      </div>
      <div className={sectionContainer}>
        <p className={welcomeText}>
          Wir sind ein kleines Familienunternehmen, welches sich auf diverse Arbeiten rund um Hausbau, -abriss und
          Entsorgung spezialisiert hat.
          <br />
          <br />
          Bei Fragen bitte einfach anrufen!
        </p>
        <a
          href={`tel:${phoneNumber}`}
          className={`icon-button ${iconButtonSecondary} ${welcomePhoneNumber} ${noDefaultUnderline}`} //TODO fix underline on hover
        >
          <span className={`material-symbols-outlined ${iconButtonSecondary}`} style={{ fontSize: "30px" }}>
            call
          </span>
          {phoneNumber}
        </a>
      </div>
      <Activities />
      <div className={sectionContainer}>
        <p className={callToActionText}>
          Fragen?
          <br />
          Einfach anrufen!
        </p>
        <a
          href={`tel:${phoneNumber}`}
          className={`icon-button ${iconButtonSecondary} ${welcomePhoneNumber} ${noDefaultUnderline}`} //TODO fix underline on hover
        >
          <span className={`material-symbols-outlined ${iconButtonSecondary}`} style={{ fontSize: "30px" }}>
            call
          </span>
          {phoneNumber}
        </a>
      </div>
    </div>
  );
};

export default Welcome;
