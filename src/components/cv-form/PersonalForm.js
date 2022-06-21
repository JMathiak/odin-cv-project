import React, { Component } from "react";
import Display from "./Display";
class PersonalForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-container">
        <form className="personal-form">
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

          <button onClick={this.props.onClick}>Submit</button>
          <button onClick={this.props.onClickEdit}>Edit</button>
          <button onClick={this.props.onClickDelete}>Delete</button>
        </form>
      </div>
    );
  }
}

export default PersonalForm;
