import React, { useState, useEffect } from 'react';
import axios from "axios";
import * as Yup from "yup";
import {v4 as uuid} from "uuid";
import './App.css';
import Form from "./Form";

function App() {
// Static variables
const API_URL = "https://reqres.in/api/users";
  const initialUser = {
    id: "", name: "", email: "", password: "", terms: false};
    const initialError = {
      name: "", email: "", password: "", terms: ""};

// State variables
  const [user, setUser] = useState(initialUser);
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState(initialError);
  const [buttonDisabled, setButtonDisabled] = useState(true);

    // Form schema for validation
  const formSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, "Your name must be at least 2 characters long.")
    .required("Name is required."),

    email: Yup.string()
    .email("johndoe@gmail.com")
    .required("Email is required."),

    password: Yup.string()
    .min(8, "Your password must be at least 8 characters long.")
    .required("Password is required"),
    terms: Yup.bool()
    .test("terms", "You must accept the terms and conditions.", valid => {
      return valid === true;
    }).required("You must accept the terms and conditions.")
  });


  // Change handler functions
  function handleInputChange(event) {
    event.persist();
    const inputName = event.target.name;
    const inputValue = event.target.value;

    // Validate the input
    Yup.reach(formSchema, inputName)
    .validate(inputValue)
    .then(valid => {
      setErrors({ ...errors, [inputName]: "" });
    }).catch(err => {
      setErrors({ ...errors, [inputName]: err.errors[0]});
    });
    setUser({ ...user, [inputName]: inputValue});
  }

  function handleCheckboxChange(event) {
    event.persist();
    const inputValue = !(user.terms);

    // Validate the input
    Yup.reach(formSchema, "terms")
    .validate(inputValue)
    .then(valid => {
      setErrors({ ...errors, terms: ""})
    }).catch(err => {
      setErrors({ ...errors, terms: err.errors[0]})
    });
    setUser({ ...user, terms: inputValue });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newUser = {id: uuid(), name: user.name,
      email: user.email, password: user.password, terms: user.terms};
      users.push(newUser);
      setUsers(users);
      setUser(initialUser);
  }


// Check user state against form schema
  useEffect(() => {
    formSchema.isValid(user).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [user]);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Jake's Fantastically Great New Product!</h1>
      </header>

      <main className="main-content">
        <section className="form">
          <Form 
      user={user}
      errors={errors}
            handleInputChange={handleInputChange}
            handleCheckboxChange={handleCheckboxChange}
          handleSubmit={handleSubmit}
          buttonDisabled={buttonDisabled} />
        </section>

        <section className="display-users">
          {users.length > 0 ?
        users.map(user => {
          return (
            <h5>{user.name} just signed up!</h5>
          );
        })
      : null }
        </section>
      </main>
    </div>
  );
}

export default App;
