import React, { Component, useState } from "react";
import uniqid from "uniqid";
import Display from "./cv-form/Display";
import PersonalForm from "./cv-form/PersonalForm";
import EducationForm from "./cv-form/EducationForm";
import SchoolHistory from "./cv-display/SchoolHistory";
import WorkForm from "./cv-form/WorkForm";
import JobHistory from "./cv-display/JobHistory";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      schoolName: "",
      study: "",
      studyDateStart: "",
      studyDateEnd: "",
      school: {},
      educationHistory: [],
      company: "",
      position: "",
      tasks: "",
      companyStart: "",
      companyEnd: "",
      job: {},
      workHistory: [],
      cv: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onClickPersonal = this.onClickPersonal.bind(this);
    this.onClickPersonalEdit = this.onClickPersonalEdit.bind(this);
    this.onClickPersonalDelete = this.onClickPersonalDelete.bind(this);
    this.onClickEducation = this.onClickEducation.bind(this);
    this.onClickEducationEdit = this.onClickEducationEdit.bind(this);
    this.onCLickEducationDelete = this.onCLickEducationDelete.bind(this);
    this.setEducationHistory = this.setEducationHistory.bind(this);
    this.onClickWork = this.onClickWork.bind(this);
  }

  onChange(e) {
    let n = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: n,
    });
  }

  onClickPersonal(e) {
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

  onClickEducation(e) {
    e.preventDefault();
    let school = {
      schoolName: this.state.schoolName,
      study: this.state.study,
      studyDateStart: this.state.studyDateStart,
      studyDateEnd: this.state.studyDateEnd,
      uniqueID: uniqid(),
    };
    this.setState({
      educationHistory: this.state.educationHistory.concat(school),
      schoolName: "",
      study: "",
      studyDateStart: "",
      studyDateEnd: "",
    });
  }

  onClickWork(e) {
    e.preventDefault();
    let job = {
      company: this.state.company,
      position: this.state.position,
      tasks: this.state.tasks,
      companyStart: this.state.companyStart,
      companyEnd: this.state.companyEnd,
      uniqueID: uniqid(),
    };
    this.setState({
      workHistory: this.state.workHistory.concat(job),
      company: "",
      position: "",
      tasks: "",
      companyStart: "",
      companyEnd: "",
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

  //Need to implement a filter to the school history array to get the school of interest
  onClickEducationEdit(e) {
    e.preventDefault();
    this.setState({
      school: this.state.cv.school,
      study: this.state.cv.study,
      studyDate: this.state.cv.studyDate,
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

  //Need to implement a filter to the school history array to delete school of interest
  onCLickEducationDelete(e) {
    e.preventDefault();
    this.setState({
      school: "",
      study: "",
      studyDate: "",
    });
    this.setState((prevState) => {
      let cv = Object.assign({}, prevState.cv);
      cv.name = this.state.name;
      cv.email = this.state.email;
      cv.phone = this.state.phone;
      return { cv };
    });
  }

  setEducationHistory(newHistory) {
    this.setState({ educationHistory: newHistory });
  }

  render() {
    return (
      <div className="app-container">
        <PersonalForm
          onChange={this.onChange}
          onClick={this.onClickPersonal}
          onClickEdit={this.onClickPersonalEdit}
          onClickDelete={this.onClickPersonalDelete}
          name={this.state.name}
          email={this.state.email}
          phone={this.state.phone}
        />
        <EducationForm
          onChange={this.onChange}
          onClick={this.onClickEducation}
          schoolName={this.state.schoolName}
          study={this.state.study}
          studyDateStart={this.state.studyDateStart}
          studyDateEnd={this.state.studyDateEnd}
        />
        <WorkForm
          onChange={this.onChange}
          onClick={this.onClickWork}
          company={this.state.company}
          position={this.state.position}
          tasks={this.state.tasks}
          companyStart={this.state.companyStart}
          companyEnd={this.state.companyEnd}
        />
        <div className="display">
          <div>Personal</div>
          <PersonalInfo />
          <div>Education: </div>
          <SchoolHistory
            schoolHistory={this.state.educationHistory}
            setEducationHistory={this.setEducationHistory}
          />
          <div>Work: </div>
          <JobHistory jobHistory={this.state.workHistory} />
        </div>
      </div>
    );
  }
}

export default Main;
