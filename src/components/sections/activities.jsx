import React from "react";
import data from "./activitiesData";
import Section from "./section";
import { sectionContainer } from "./activities.module.css";

const Activities = () => {
  return (
    <div className={sectionContainer}>
      {data.map((activity, index) => (
        <Section key={index} {...activity} />
      ))}
    </div>
  );
};

export default Activities;
