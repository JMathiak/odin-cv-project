import React, { Component } from "react";

const Job = ({
  jobs,
  name,
  work,
  workID,
  setWorkHistory,
  setWorkIndex,
  setWorkEdit,
  setJobEntered,
}) => {
  const deleteHandler = () => {
    let newArr = jobs.filter((curJob) => curJob.uniqueID !== work.uniqueID);
    setWorkHistory(newArr);
    if (newArr.length === 0) {
      setJobEntered(false);
    }
  };

  const editHandler = () => {
    let pos = jobs
      .map(function (e) {
        return e.uniqueID;
      })
      .indexOf(workID);
    setWorkIndex(pos);
    setWorkEdit(work);
  };

  return (
    <li>
      {work.companyStart} - {work.companyEnd} &emsp;
      <button onClick={deleteHandler}>Delete</button>{" "}
      <button onClick={editHandler}>Edit</button>
      <ul>
        <li>
          {name} - {work.position}{" "}
        </li>
        <ul>
          <li>{work.tasks}</li>
        </ul>
      </ul>
    </li>
  );
};

export default Job;
