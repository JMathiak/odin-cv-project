import React, { Component } from "react";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <li>Name: {this.props.personalInformation.name}</li>
        <li>Email: {this.props.personalInformation.email}</li>
        <li>Phone: {this.props.personalInformation.phone}</li>
      </ul>
    );
  }
}

export default PersonalInfo;
