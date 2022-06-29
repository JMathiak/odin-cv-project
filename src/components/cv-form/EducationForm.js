import React, { Component } from "react";
import "../../styles/forms.css";
class EducationForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-container">
        <div className="form-label">Add Education History</div>
        <form className="education-form">
          <label for="name">School Name </label>
          <input
            id="name"
            type="text"
            name="schoolName"
            value={this.props.schoolName}
            onChange={this.props.onChange}
          ></input>

          <label for="study">Degree and Subject </label>
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

          <div className="form-buttons">
            <button onClick={this.props.onClick}>
              {!this.props.editingSchool ? "Submit" : "Edit"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EducationForm;
