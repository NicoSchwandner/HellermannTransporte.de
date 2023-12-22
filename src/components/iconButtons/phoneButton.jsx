import React from "react";
import { iconButtonPrimary } from "./iconButton.module.css";

const PhoneButton = ({ phoneNumber, fontSize }) => {
  return (
    <a href={`tel:${phoneNumber}`} className={`icon-button ${iconButtonPrimary}`}>
      <span className={`material-symbols-outlined ${iconButtonPrimary}`} style={{ fontSize: fontSize }}>
        call
      </span>
    </a>
  );
};

export default PhoneButton;
