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
    this.onClickPersonalEdit = this.onClickPersonalEdit.bind(this);
    this.onClickPersonalDelete = this.onClickPersonalDelete.bind(this);
  }

  onChange(e) {
    let n = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: n,
    });
  }

  onClickPersonalEdit(e) {
    e.preventDefault();
    this.setState({
      name: this.state.cv.name,
      email: this.state.cv.email,
      phone: this.state.cv.phone,
    });
  }

  onClickPersonalDelete(e) {
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      phone: "",
    });
    this.setState((prevState) => {
      let cv = Object.assign({}, prevState.cv);
      cv.name = this.state.name;
      cv.email = this.state.email;
      cv.phone = this.state.phone;
      return { cv };
    });
  }
  onClick(e) {
    e.preventDefault();
    this.setState((prevState) => {
      let cv = Object.assign({}, prevState.cv);
      cv.name = this.state.name;
      cv.email = this.state.email;
      cv.phone = this.state.phone;
      return { cv };
    });
    this.setState({
      name: "",
      email: "",
      phone: "",
    });
  }

  render() {
    return (
      <div>
        <PersonalForm
          onChange={this.onChange}
          onClick={this.onClick}
          onClickEdit={this.onClickPersonalEdit}
          onClickDelete={this.onClickPersonalDelete}
          name={this.state.name}
          email={this.state.email}
          phone={this.state.phone}
        />
        <Display name={this.state.cv} displaying="CV: " />
      </div>
    );
  }
}

export default Main;
