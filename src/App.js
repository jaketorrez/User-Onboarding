import React, { useState, useEffect } from 'react';
import axios from "axios";
import yup from "yup";
import {v4 as uuid} from "uuid";
import './App.css';
import Form from "./Form";

function App() {
// Static variables
  const initialValue = {
    id: "", name: "", email: "", password: "", terms: false};

// State variables
  const [user, setUser] = useState(initialValue);

  return (
    <div className="App">
      <header className="App-header">
      </header>

      <main class="main-content">
        <section class="form">
          <Form 
          user={}
          handleChange={}
          handleSubmit={} />
        </section>
      </main>
    </div>
  );
}

export default App;
