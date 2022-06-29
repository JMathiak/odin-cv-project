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
    if (newArr.length === 0) {
      this.props.setJobEntered(false);
    }
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
        {this.props.work.companyStart} - {this.props.work.companyEnd} &emsp;
        <button onClick={this.deleteHandler}>Delete</button>{" "}
        <button onClick={this.editHandler}>Edit</button>
        <ul>
          <li>
            {this.props.name} - {this.props.work.position}{" "}
          </li>
          <ul>
            <li>{this.props.work.tasks}</li>
          </ul>
        </ul>
      </li>
    );
  }
}

export default Job;
