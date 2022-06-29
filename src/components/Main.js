import React, { Component, useState } from "react";
import uniqid from "uniqid";
import Display from "./cv-form/Display";
import PersonalForm from "./cv-form/PersonalForm";
import EducationForm from "./cv-form/EducationForm";
import SchoolHistory from "./cv-display/SchoolHistory";
import WorkForm from "./cv-form/WorkForm";
import JobHistory from "./cv-display/JobHistory";
import PersonalInfo from "./cv-display/PersonalInfo";
import "../styles/main.css";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      personalInformation: {},
      personalEntered: false,
      schoolName: "",
      study: "",
      studyDateStart: "",
      studyDateEnd: "",
      school: {},
      educationHistory: [],
      schoolEntered: false,
      company: "",
      position: "",
      tasks: "",
      companyStart: "",
      companyEnd: "",
      job: {},
      workHistory: [],
      jobEntered: false,
      cv: {},
      editingSchool: false,
      schoolIndex: 0,
      editingPersonal: false,
      editingWork: false,
      workIndex: 0,
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
    this.setWorkHistory = this.setWorkHistory.bind(this);
    this.setSchoolIndex = this.setSchoolIndex.bind(this);
    this.setSchoolEdit = this.setSchoolEdit.bind(this);
    this.setPersonalEdit = this.setPersonalEdit.bind(this);
    this.setWorkEdit = this.setWorkEdit.bind(this);
    this.setWorkIndex = this.setWorkIndex.bind(this);
    this.setJobEntered = this.setJobEntered.bind(this);
    this.setSchoolEntered = this.setSchoolEntered.bind(this);
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
    this.setState({
      personalInformation: {
        ...this.state.personalInformation,
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
      },
      name: "",
      email: "",
      phone: "",
      personalEntered: true,
    });
  }

  onClickEducation(e) {
    e.preventDefault();
    if (this.state.editingSchool === true) {
      const eduCopy = this.state.educationHistory.slice();
      eduCopy[this.state.schoolIndex] = {
        schoolName: this.state.schoolName,
        study: this.state.study,
        studyDateStart: this.state.studyDateStart,
        studyDateEnd: this.state.studyDateEnd,
      };
      this.setState({
        educationHistory: eduCopy,
        schoolName: "",
        study: "",
        studyDateStart: "",
        studyDateEnd: "",
        editingSchool: false,
      });
    } else {
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
        schoolEntered: true,
      });
    }
  }

  onClickWork(e) {
    e.preventDefault();
    if (this.state.editingWork === true) {
      const workCopy = this.state.workHistory.slice();
      workCopy[this.state.workIndex] = {
        company: this.state.company,
        position: this.state.position,
        tasks: this.state.tasks,
        companyStart: this.state.companyStart,
        companyEnd: this.state.companyEnd,
      };
      this.setState({
        workHistory: workCopy,
        company: "",
        position: "",
        tasks: "",
        companyStart: "",
        companyEnd: "",
        editingWork: false,
      });
    } else {
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
        jobEntered: true,
      });
    }
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

  setWorkHistory(newHistory) {
    this.setState({ workHistory: newHistory });
  }

  setSchoolIndex(index) {
    this.setState({ schoolIndex: index });
  }

  setWorkIndex(index) {
    this.setState({ workIndex: index });
  }

  setJobEntered(status) {
    this.setState({ jobEntered: status });
  }

  setSchoolEntered(status) {
    this.setState({ schoolEntered: status });
  }

  setSchoolEdit(school) {
    this.setState({
      schoolName: school.schoolName,
      study: school.study,
      studyDateStart: school.studyDateStart,
      studyDateEnd: school.studyDateEnd,
      editingSchool: true,
    });
  }

  setPersonalEdit(info) {
    this.setState({
      name: info.name,
      email: info.email,
      phone: info.phone,
      editingPersonal: true,
    });
  }

  setWorkEdit(work) {
    this.setState({
      company: work.company,
      position: work.position,
      tasks: work.tasks,
      companyStart: work.companyStart,
      companyEnd: work.companyEnd,
      editingWork: true,
    });
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
          editingSchool={this.state.editingSchool}
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
          <PersonalInfo
            personalInformation={this.state.personalInformation}
            setPersonalEdit={this.setPersonalEdit}
            personalEntered={this.state.personalEntered}
          />
          <SchoolHistory
            schoolHistory={this.state.educationHistory}
            setEducationHistory={this.setEducationHistory}
            setSchoolIndex={this.setSchoolIndex}
            setSchoolEdit={this.setSchoolEdit}
            schoolEntered={this.state.schoolEntered}
            setSchoolEntered={this.setSchoolEntered}
          />
          <JobHistory
            jobHistory={this.state.workHistory}
            setWorkHistory={this.setWorkHistory}
            setWorkIndex={this.setWorkIndex}
            setWorkEdit={this.setWorkEdit}
            jobEntered={this.state.jobEntered}
            setJobEntered={this.setJobEntered}
          />
        </div>
      </div>
    );
  }
}

export default Main;
