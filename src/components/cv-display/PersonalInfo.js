import React, { Component } from "react";
import "../../styles/personalInfo.css";
const PersonalInfo = ({ personalInformation, personalEntered }) => {
  return (
    <div
      className="personal-container"
      style={{ display: personalEntered ? "block" : "none" }}
    >
      <div className="display-name">{personalInformation.name}</div>
      <div className="display-contact">
        {personalInformation.email} | {personalInformation.phone}{" "}
      </div>
    </div>
  );
};

export default PersonalInfo;
