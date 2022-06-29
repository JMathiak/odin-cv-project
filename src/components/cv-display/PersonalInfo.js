import React, { Component } from "react";
import "../../styles/personalInfo.css";
class PersonalInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="personal-container"
        style={{ display: this.props.personalEntered ? "block" : "none" }}
      >
        <div className="display-name">
          {this.props.personalInformation.name}
        </div>
        <div className="display-contact">
          {this.props.personalInformation.email} |{" "}
          {this.props.personalInformation.phone}{" "}
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
