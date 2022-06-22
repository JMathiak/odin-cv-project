import React, { Component } from "react";
import School from "./School";
class SchoolHistory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.schoolHistory.map((school) => (
            <School
              schools={this.props.schoolHistory}
              name={school.schoolName}
              school={school}
              key={school.uniqueID}
              setEducationHistory={this.props.setEducationHistory}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default SchoolHistory;
