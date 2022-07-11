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
import Header from "./Header";
import Footer from "./Footer";
const Main = () => {

    
      const[name, setName] = useState('');
      const[email, setEmail] = useState('');
      const[phone, setPhone] = useState('');
      const[personalInformation, setPersonalInformation] = useState({});
      const[personalEntered, setPersonalEntered] = useState(false);
      const[schoolName, setSchoolName] = useState('');
      const[study, setStudy] = useState('');
      const[studyDateStart, setStudyDateStart] = useState('');
       const[studyDateEnd, setStudyDateEnd] = useState('');
       const[school, setSchool] = useState({});
       const[educationHistory, setEducationHistory] = useState([]);
       const[schoolEntered, setSchoolEntered] = useState(false);
      const[company, setCompany] = useState('');
      const[position, setPosition] = useState('');
      const[tasks, setTasks] = useState('');
      const[companyStart, setCompanyStart] = useState('');
      const[companyEnd, setCompanyEnd] = useState('');
      const[job, setJob] = useState({});
      const[jobEntered, setJobEntered] = useState(false);
      const[editingSchool, setEditingSchool] = useState(false);
      const[schoolIndex, setSchoolIndex] = useState(0);
      const[editingPersonal, setEditingPersonal] = useState(false);
      const[editingWork, setEditingWork] = useState(false);
      const[workIndex, setWorkIndex] = useState(0);






  

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

  
    return (
      <div className="app-container">
        <Header />
        <PersonalForm
          name={name}
          setName={setName}
          email={email}
          setEmail = {setEmail}
          phone={phone}
          setPhone={setPhone}
          setPersonalInformation={setPersonalInformation}
          setPersonalEntered={setPersonalEntered}
        />
        <EducationForm
          schoolName={schoolName}
          setSchoolName={setSchoolName}
          study={study}
          setStudy={setStudy}
          studyDateStart={studyDateStart}
          setStudyDateStart={setStudyDateStart}
          studyDateEnd={studyDateEnd}
          setStudyDateEnd={setStudyDateEnd}
          editingSchool={editingSchool}
          setEditingSchool={setEditingSchool}
          educationHistory={educationHistory}
          setEducationHistory={setEducationHistory}
          schoolIndex={schoolIndex}
        />
        <WorkForm
          company={company}
          setCompany={setCompany}
          position={position}
          setPosition={setPosition}
          tasks={tasks}
          setTasks={setTasks}
          companyStart={companyStart}
          setCompanyStart={setCompanyStart}
          companyEnd={companyEnd}
          setCompanyEnd={setCompanyEnd}
          editingWork={editingWork}
          setEditingWork={setEditingWork}
          workIndex={workIndex}
          workHistory={workHistory}
          setWorkHistory={setWorkHistory}
          jobEntered={jobEntered}
          setJobEntered={setJobEntered}
        />
        <div className="display">
          <PersonalInfo
            personalInformation={personalInformation}
            setPersonalEdit={this.setPersonalEdit}
            personalEntered={personalEntered}
          />
          <SchoolHistory
            schoolHistory={educationHistory}
            setEducationHistory={setEducationHistory}
            setSchoolIndex={setSchoolIndex}
            setSchoolEdit={this.setSchoolEdit}
            schoolEntered={schoolEntered}
            setSchoolEntered={setSchoolEntered}
          />
          <JobHistory
            jobHistory={workHistory}
            setWorkHistory={setWorkHistory}
            setWorkIndex={setWorkIndex}
            setWorkEdit={this.setWorkEdit}
            jobEntered={jobEntered}
            setJobEntered={setJobEntered}
          />
        </div>
        <Footer />
      </div>
    );
  
}

export default Main;
