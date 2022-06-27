import React, { Component } from "react";

class School extends Component {
  constructor(props) {
    super(props);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  deleteHandler() {
    let newArr = this.props.schools.filter(
      (curSchool) => curSchool.uniqueID !== this.props.school.uniqueID
    );
    this.props.setEducationHistory(newArr);
    console.log(this.props.schools);
    console.log(newArr);
  }

  render() {
    return (
      <li>
        <ul>
          <li>
            School Name: {this.props.name}{" "}
            <button onClick={this.deleteHandler}>Delete</button>{" "}
            <button>Edit</button>
          </li>
          <li>Subject of Study: {this.props.school.study}</li>
          <li>
            Dates Studied: {this.props.school.studyDateStart} -{" "}
            {this.props.school.studyDateEnd}
          </li>
        </ul>
      </li>
    );
  }
}

export default School;
