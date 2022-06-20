import React, { Component, useState } from "react";
import Display from "./cv-form/Display";
import PersonalForm from "./cv-form/PersonalForm";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      school: "",
      study: "",
      studyDate: "",
      company: "",
      position: "",
      tasks: "",
      companyStart: "",
      companyEnd: "",
      cv: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    let n = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: n,
    });
  }
  onClick(e) {
    e.preventDefault();
    this.setState((prevState) => {
      let cv = Object.assign({}, prevState.cv);
      cv.name = this.state.name;
      cv.email = this.state.email;
      return { cv };
    });
  }

  render() {
    return (
      <div>
        <PersonalForm onChange={this.onChange} onClick={this.onClick} />
        <Display name={this.state.cv} displaying="CV: " />
      </div>
    );
  }
}

export default Main;
