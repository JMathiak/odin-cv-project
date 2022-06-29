import React, { Component } from "react";
import Display from "./Display";
import "../../styles/forms.css";
class PersonalForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-container">
        <div className="form-label">Add Personal Information</div>
        <form className="personal-form" id="form">
          <label for="name">Name </label>
          <input
            id="name"
            type="text"
            name="name"
            value={this.props.name}
            onChange={this.props.onChange}
          ></input>
          <label for="email">Email </label>
          <input
            id="email"
            type="text"
            name="email"
            value={this.props.email}
            onChange={this.props.onChange}
          ></input>
          <label for="phone">Phone </label>
          <input
            type="text"
            name="phone"
            value={this.props.phone}
            onChange={this.props.onChange}
          ></input>
          <div className="form-buttons">
            <button onClick={this.props.onClick}>Submit</button>
            <button onClick={this.props.onClickEdit}>Edit</button>
            <button onClick={this.props.onClickDelete}>Delete</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PersonalForm;
