import React, { Component } from "react";
import School from "./School";
import uniqid from "uniqid";
class SchoolHistory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ display: this.props.schoolEntered ? "block" : "none" }}>
        Education:
        <ul>
          {this.props.schoolHistory.map((school) => (
            <School
              schools={this.props.schoolHistory}
              name={school.schoolName}
              school={school}
              key={uniqid()}
              schoolID={school.uniqueID}
              setEducationHistory={this.props.setEducationHistory}
              setSchoolIndex={this.props.setSchoolIndex}
              setSchoolEdit={this.props.setSchoolEdit}
              setSchoolEntered={this.props.setSchoolEntered}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default SchoolHistory;
