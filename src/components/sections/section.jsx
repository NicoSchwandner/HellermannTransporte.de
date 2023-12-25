// import React from "react";
// import { section, titleText, descriptionText } from "./section.module.css";

// const Section = ({ title, description, imagePath }) => (
//   <section className={section} style={{ backgroundImage: `url(${imagePath})` }}>
//     <h1 className={titleText}>{title}</h1>
//     <p className={descriptionText}>{description}</p>
//   </section>
// );

// export default Section;

import React from "react";
import {
  section,
  titleText,
  descriptionText,
  image,
  content,
  backgroundImage,
  hoverBackground,
} from "./section.module.css";

const Section = ({ title, description, imagePath }) => {
  return (
    <section className={section}>
      <div
        style={{ "--background-image": `url(${imagePath})` }}
        className={`${section} ${backgroundImage}`} //${profileImage}
      >
        <div className={`${content} ${hoverBackground}`}>
          <p className={descriptionText}>{description}</p>
          <h1 className={titleText}>{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default Section;
