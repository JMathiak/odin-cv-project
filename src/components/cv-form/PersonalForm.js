import React, { Component } from "react";
import Display from "./Display";
class PersonalForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Name
            <input
              type="text"
              name="name"
              onChange={this.props.onChange}
            ></input>
          </label>
          <label>
            Email
            <input
              type="text"
              name="email"
              onChange={this.props.onChange}
            ></input>
          </label>
          <button onClick={this.props.onClick}>Submit</button>
        </form>
      </div>
    );
  }
}

export default PersonalForm;
