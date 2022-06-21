import React, { Component } from "react";

class School extends Component {
  constructor(props) {
    super(props);
  }

  // deleteHandler()
  // {
  //     let education = this.props.educationHistory;
  //     education.filter((schl) => schl.id !== )
  // }
  render() {
    return <li>{this.props.name}</li>;
  }
}

export default School;
