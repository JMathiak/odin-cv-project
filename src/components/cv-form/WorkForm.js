import React, { Component } from "react";
import "../../styles/forms.css";
class WorkForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-container">
        <div className="form-label">Add Professional Experience</div>
        <form className="work-form">
          <label for="name">Company Name </label>
          <input
            id="name"
            type="text"
            name="company"
            value={this.props.company}
            onChange={this.props.onChange}
          ></input>

          <label for="position">Position</label>
          <input
            id="position"
            type="text"
            name="position"
            value={this.props.position}
            onChange={this.props.onChange}
          ></input>

          <label for="tasks">Tasks</label>
          <input
            type="text"
            name="tasks"
            value={this.props.tasks}
            onChange={this.props.onChange}
          ></input>
          <label for="company-start">Company Start Date</label>
          <input
            id="company-start"
            type="text"
            name="companyStart"
            value={this.props.companyStart}
            onChange={this.props.onChange}
          ></input>
          <label for="company-end">Company End Date</label>
          <input
            id="company-end"
            type="text"
            name="companyEnd"
            value={this.props.companyEnd}
            onChange={this.props.onChange}
          ></input>
          <div className="form-buttons">
            <button onClick={this.props.onClick}>
              {!this.props.editingWork ? "Submit" : "Edit"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default WorkForm;
