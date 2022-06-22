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
        {this.props.name}, {this.props.school.study},
        {this.props.school.studyDateStart} - {this.props.school.studyDateEnd}
        <button onClick={this.deleteHandler}>Delete</button>
      </li>
    );
  }
}

export default School;
