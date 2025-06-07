import React from "react";
import "./Sign.css";

const Sign = () => {
  return (
    <div id="signIn">
      <form>
        <h2 id="signTitle">Create Account</h2>

        <div className="list">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your full name" />
        </div>

        <div className="list">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>

        <div className="list">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Choose a username" />
        </div>

        <div className="list">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Create a password"
          />
        </div>

        <div className="list">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
          />
        </div>

        <button type="submit" id="signBtn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Sign;
