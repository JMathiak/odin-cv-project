import React, { Component } from "react";
import Display from "./Display";
import "../../styles/forms.css";
const PersonalForm = ({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  personalInformation,
  setPersonalInformation,
  setPersonalEntered,
}) => {
  const submitHandler = (e) => {
    e.preventDefault();
    let personInfoObj = { name: name, email: email, phone: phone };
    setPersonalInformation(personInfoObj);
    setName("");
    setEmail("");
    setPhone("");
    setPersonalEntered(true);
  };

  const editHandler = (e) => {
    e.preventDefault();
    console.log(personalInformation);
    setName(personalInformation.name);
    setEmail(personalInformation.email);
    setPhone(personalInformation.phone);
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    setPersonalInformation({
      name: "",
      email: "",
      phone: "",
    });
    setPersonalEntered(false);
  };
  return (
    <div className="form-container">
      <div className="form-label">Add Personal Information</div>
      <form className="personal-form" id="form">
        <label for="name">Name </label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <label for="email">Email </label>
        <input
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <label for="phone">Phone </label>
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        ></input>
        <div className="form-buttons">
          <button onClick={submitHandler}>Submit</button>
          <button onClick={editHandler}>Edit</button>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      </form>
    </div>
  );
};

export default PersonalForm;
