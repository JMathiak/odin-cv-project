import React, { Component } from "react";
import "../../styles/forms.css";
import uniqid from "uniqid";
const EducationForm = ({
  schoolName,
  setSchoolName,
  study,
  setStudy,
  studyDateStart,
  setStudyDateStart,
  studyDateEnd,
  setStudyDateEnd,
  editingSchool,
  setEditingSchool,
  educationHistory,
  setEducationHistory,
  schoolIndex,
  schoolEntered,
  setSchoolEntered,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (editingSchool === true) {
      const eduCopy = educationHistory.slice();
      eduCopy[schoolIndex] = {
        schoolName: schoolName,
        study: study,
        studyDateStart: studyDateStart,
        studyDateEnd: studyDateEnd,
      };
      setEducationHistory(eduCopy);
      setEditingSchool(false);
    } else {
      let school = {
        schoolName: schoolName,
        study: study,
        studyDateStart: studyDateStart,
        studyDateEnd: studyDateEnd,
        uniqueID: uniqid(),
      };
      setEducationHistory([...educationHistory, school]);
      setSchoolEntered(true);
    }
    setSchoolName("");
    setStudy("");
    setStudyDateStart("");
    setStudyDateEnd("");
  };
  return (
    <div className="form-container">
      <div className="form-label">Add Education History</div>
      <form className="education-form">
        <label for="name">School Name </label>
        <input
          id="name"
          type="text"
          name="schoolName"
          value={schoolName}
          onChange={(e) => {
            setSchoolName(e.target.value);
          }}
        ></input>

        <label for="study">Degree and Subject </label>
        <input
          id="study"
          type="text"
          name="study"
          value={study}
          onChange={(e) => {
            setStudy(e.target.value);
          }}
        ></input>

        <label for="start-date">Start Date </label>
        <input
          type="text"
          name="studyDateStart"
          id="start-date"
          value={studyDateStart}
          onChange={(e) => {
            setStudyDateStart(e.target.value);
          }}
        ></input>
        <label for="end-date">End Date </label>
        <input
          type="text"
          name="studyDateEnd"
          id="end-date"
          value={studyDateEnd}
          onChange={(e) => {
            setStudyDateEnd(e.target.value);
          }}
        ></input>

        <div className="form-buttons">
          <button onClick={handleClick}>
            {!editingSchool ? "Submit" : "Edit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EducationForm;
