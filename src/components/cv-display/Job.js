import React, { Component } from "react";

class Job extends Component {
  constructor(props) {
    super(props);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.editHandler = this.editHandler.bind(this);
  }

  deleteHandler() {
    let newArr = this.props.jobs.filter(
      (curJob) => curJob.uniqueID !== this.props.work.uniqueID
    );
    this.props.setWorkHistory(newArr);
  }

  editHandler() {
    let pos = this.props.jobs
      .map(function (e) {
        return e.uniqueID;
      })
      .indexOf(this.props.workID);
    this.props.setWorkIndex(pos);
    this.props.setWorkEdit(this.props.work);
  }
  render() {
    return (
      <li>
        {this.props.name} <button onClick={this.deleteHandler}>Delete</button>{" "}
        <button onClick={this.editHandler}>Edit</button>
        <ul>
          <li>Company Name: {this.props.name}</li>
          <li>Job Title: {this.props.work.position}</li>
          <li>Job Tasks: {this.props.work.tasks}</li>
          <li>
            Dates Working: {this.props.work.companyStart} -
            {this.props.work.companyEnd}
          </li>
        </ul>
      </li>
    );
  }
}

export default Job;
