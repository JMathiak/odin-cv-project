import React, { Component } from "react";
import Job from "./Job";
import uniqid from "uniqid";
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
              workID={work.uniqueID}
              key={uniqid()}
              setWorkHistory={this.props.setWorkHistory}
              setWorkIndex={this.props.setWorkIndex}
              setWorkEdit={this.props.setWorkEdit}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default JobHistory;
