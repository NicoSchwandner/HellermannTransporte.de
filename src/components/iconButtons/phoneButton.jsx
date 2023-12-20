import React from "react";
import { iconButton } from "./iconButton.module.css";

const PhoneButton = ({ phoneNumber, fontSize }) => {
  return (
    <a href={`tel:${phoneNumber}`} className="icon-button" class={iconButton}>
      <span className="material-symbols-outlined" style={{ fontSize: fontSize }}>
        call
      </span>
    </a>
  );
};

export default PhoneButton;
