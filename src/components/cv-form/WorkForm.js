import React, { Component } from "react";
import "../../styles/forms.css";
import uniqid from "uniqid";
const WorkForm = ({
  company,
  setCompany,
  position,
  setPosition,
  tasks,
  setTasks,
  companyStart,
  setCompanyStart,
  companyEnd,
  setCompanyEnd,
  editingWork,
  setEditingWork,
  workIndex,
  workHistory,
  setWorkHistory,
  jobEntered,
  setJobEntered,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (editingWork === true) {
      const workCopy = workHistory.slice();
      workCopy[workIndex] = {
        company: company,
        position: position,
        tasks: tasks,
        companyStart: companyStart,
        companyEnd: companyEnd,
      };
      setWorkHistory(workCopy);
      setEditingWork(false);
    } else {
      let job = {
        company: company,
        position: position,
        tasks: tasks,
        companyStart: companyStart,
        companyEnd: companyEnd,
        uniqueID: uniqid(),
      };
      setWorkHistory([...workHistory, job]);
      setJobEntered(true);
    }
    setCompany("");
    setPosition("");
    setTasks("");
    setCompanyStart("");
    setCompanyEnd("");
  };
  return (
    <div className="form-container">
      <div className="form-label">Add Professional Experience</div>
      <form className="work-form">
        <label for="name">Company Name </label>
        <input
          id="name"
          type="text"
          name="company"
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
        ></input>

        <label for="position">Position</label>
        <input
          id="position"
          type="text"
          name="position"
          value={position}
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        ></input>

        <label for="tasks">Tasks</label>
        <input
          type="text"
          name="tasks"
          value={tasks}
          onChange={(e) => {
            setTasks(e.target.value);
          }}
        ></input>
        <label for="company-start">Company Start Date</label>
        <input
          id="company-start"
          type="text"
          name="companyStart"
          value={companyStart}
          onChange={(e) => {
            setCompanyStart(e.target.value);
          }}
        ></input>
        <label for="company-end">Company End Date</label>
        <input
          id="company-end"
          type="text"
          name="companyEnd"
          value={companyEnd}
          onChange={(e) => {
            setCompanyEnd(e.target.value);
          }}
        ></input>
        <div className="form-buttons">
          <button onClick={handleClick}>
            {!this.props.editingWork ? "Submit" : "Edit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkForm;
