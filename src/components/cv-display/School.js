import React, { Component } from "react";

const School = ({
  schools,
  name,
  school,
  schoolID,
  setEducationHistory,
  setSchoolIndex,
  setSchoolEdit,
  setSchoolEntered,
}) => {
  const deleteHandler = () => {
    let newArr = schools.filter(
      (curSchool) => curSchool.uniqueID !== school.uniqueID
    );
    setEducationHistory(newArr);
    if (newArr.length === 0) {
      setSchoolEntered(false);
    }
  };

  const editHandler = () => {
    let pos = schools
      .map(function (e) {
        return e.uniqueID;
      })
      .indexOf(schoolID);
    setSchoolIndex(pos);
    setSchoolEdit(school);
  };

  return (
    <li>
      {school.studyDateStart} - {school.studyDateEnd}
      &emsp;
      <button onClick={deleteHandler}>Delete</button>{" "}
      <button onClick={editHandler}>Edit</button>
      <ul>
        <li>{name}</li>
        <li>{school.study}</li>
      </ul>
    </li>
  );
};

export default School;
