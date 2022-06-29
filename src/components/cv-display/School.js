import React, { Component } from "react";

class School extends Component {
  constructor(props) {
    super(props);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.editHandler = this.editHandler.bind(this);
  }

  deleteHandler() {
    let newArr = this.props.schools.filter(
      (curSchool) => curSchool.uniqueID !== this.props.school.uniqueID
    );
    this.props.setEducationHistory(newArr);
    if (newArr.length === 0) {
      this.props.setSchoolEntered(false);
    }
  }

  editHandler() {
    let pos = this.props.schools
      .map(function (e) {
        return e.uniqueID;
      })
      .indexOf(this.props.schoolID);
    this.props.setSchoolIndex(pos);
    this.props.setSchoolEdit(this.props.school);
  }

  render() {
    return (
      <li>
        {this.props.school.studyDateStart} - {this.props.school.studyDateEnd}
        &emsp;
        <button onClick={this.deleteHandler}>Delete</button>{" "}
        <button onClick={this.editHandler}>Edit</button>
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.school.study}</li>
        </ul>
      </li>
    );
  }
}

export default School;
