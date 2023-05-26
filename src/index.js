import React from "react";
import ReactDOM from "react-dom";

const Form = () => {
  return (
    <div id="container">
      <div id="navbar">Form.js</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
const handleSubmit = (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  console.log(username);
};

ReactDOM.render(<Form />, document.getElementById("app"));
