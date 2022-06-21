import React, { Component } from "react";

class EducationForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="education-form-container">
        <form className="education-form">
          <label for="name">School Name </label>
          <input
            id="name"
            type="text"
            name="schoolName"
            value={this.props.schoolName}
            onChange={this.props.onChange}
          ></input>

          <label for="study">Subject of Study </label>
          <input
            id="study"
            type="text"
            name="study"
            value={this.props.study}
            onChange={this.props.onChange}
          ></input>

          <label for="start-date">Start Date </label>
          <input
            type="text"
            name="studyDateStart"
            id="start-date"
            value={this.props.studyDateStart}
            onChange={this.props.onChange}
          ></input>
          <label for="end-date">End Date </label>
          <input
            type="text"
            name="studyDateEnd"
            id="end-date"
            value={this.props.studyDateEnd}
            onChange={this.props.onChange}
          ></input>

          <button onClick={this.props.onClick}>Submit</button>
          <button onClick={this.props.onClickEdit}>Edit</button>
          <button onClick={this.props.onClickDelete}>Delete</button>
        </form>
      </div>
    );
  }
}

export default EducationForm;
