import React from "react";
import './login.css';
import { Link } from "react-router-dom";

function App() {
  const handlesubmit = (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
      alert("Login Successful");
      window.location.href = "/home";
      
    } else {
      alert("Login Failed");
    }

  };

  return (
    <>
      <div className="container1">
        <div className="container2">
          <h1>Login</h1>
          <form>
            <div className="form-group">
              <label for="username">Username</label>
              <input type="text" className="form-control" id="username" />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn" onClick={handlesubmit}>
                Submit
              </button>
              <Link to={"/forgot"}>
              <button type="submit" className="btn">Forgot password</button></Link>
              <Link to={"/register"}>
              <button type="submit" className="btn">Register</button></Link>
            </div>
          </form>
        </div>
      </div>
    </>
      
  );
}
export default App;