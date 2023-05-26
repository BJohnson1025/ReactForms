import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState(''); 
  const handleChange = (event) => {
      setUsername(event.target.value)
    }
  const handleSubmit = (event) => {
      event.preventDefault()
      console.log(username)
      setUsername('')
    }

  return (
    <div id="container">
      <div id="navbar">Form.js</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type='text' name='username' value={username} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


ReactDOM.render(<Form />, document.getElementById("app"));
