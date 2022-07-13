import React, { Component } from "react";
import School from "./School";
import uniqid from "uniqid";
const SchoolHistory = ({
  schoolHistory,
  setEducationHistory,
  setSchoolIndex,
  setSchoolEdit,
  schoolEntered,
  setSchoolEntered,
}) => {
  return (
    <div style={{ display: schoolEntered ? "block" : "none" }}>
      Education:
      <ul>
        {schoolHistory.map((school) => (
          <School
            schools={schoolHistory}
            name={school.schoolName}
            school={school}
            key={uniqid()}
            schoolID={school.uniqueID}
            setEducationHistory={setEducationHistory}
            setSchoolIndex={setSchoolIndex}
            setSchoolEdit={setSchoolEdit}
            setSchoolEntered={setSchoolEntered}
          />
        ))}
      </ul>
    </div>
  );
};

export default SchoolHistory;
