import React, { Component } from "react";

class Job extends Component {
  constructor(props) {
    super(props);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  deleteHandler() {
    let newArr = this.props.jobs.filter(
      (curJob) => curJob.uniqueID !== this.props.work.uniqueID
    );
    this.props.setWorkHistory(newArr);
  }

  render() {
    return (
      <li>
        {this.props.name} <button onClick={this.deleteHandler}>Delete</button>{" "}
        <button>Edit</button>
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
