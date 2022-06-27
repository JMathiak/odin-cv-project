import React, { Component } from "react";
import Job from "./Job";
class JobHistory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.jobHistory.map((work) => (
            <Job
              jobs={this.props.jobHistory}
              name={work.company}
              work={work}
              key={work.uniqueID}
              setWorkHistory={this.props.setWorkHistory}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default JobHistory;
