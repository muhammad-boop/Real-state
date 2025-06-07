import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div
      id="login"
      onSubmit={(e) => {
        alert("Login Successful!");
        e.preventDefault();
      }}
    >
      <span id="logintitle">Login Page</span>
      <form action="">
        <div className="list">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="list">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>
        <button id="loginBtn">Login</button>
      </form>
    </div>
  );
};

export default Login;
