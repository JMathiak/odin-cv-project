import React, { Component } from "react";
import Job from "./Job";
import uniqid from "uniqid";
const JobHistory = ({
  jobHistory,
  setWorkHistory,
  setWorkIndex,
  setWorkEdit,
  jobEntered,
  setJobEntered,
}) => {
  return (
    <div style={{ display: jobEntered ? "block" : "none" }}>
      Professional Experience:
      <ul>
        {jobHistory.map((work) => (
          <Job
            jobs={jobHistory}
            name={work.company}
            work={work}
            workID={work.uniqueID}
            key={uniqid()}
            setWorkHistory={setWorkHistory}
            setWorkIndex={setWorkIndex}
            setWorkEdit={setWorkEdit}
            setJobEntered={setJobEntered}
          />
        ))}
      </ul>
    </div>
  );
};

export default JobHistory;
