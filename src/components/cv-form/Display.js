import React, { Component } from "react";

class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.name.name}</div>;
  }
}

export default Display;
