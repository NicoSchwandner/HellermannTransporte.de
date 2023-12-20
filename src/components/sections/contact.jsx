import React from "react";
import useSiteMetadata from "../../hooks/useSiteMetadata";
import { contactContainer, linkItem, linkText } from "./contact.module.css";

const Contact = () => {
  const { phoneNumber, email, address } = useSiteMetadata();

  return (
    <ul className={contactContainer}>
      <li className={linkItem}>
        <a className={linkText} href={`tel:${phoneNumber}`}>
          {phoneNumber}
        </a>
      </li>
      <li className={linkItem}>
        <a className={linkText} href={`mailto: ${email}`}>
          {email}
        </a>
      </li>
      <li className={linkItem}>
        <a className={linkText} href={`https://www.google.com/maps/search/?api=1&query=${address}`}>
          {address}
        </a>
      </li>
    </ul>
  );
};

export default Contact;
