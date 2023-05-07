import React from "react";
import "./styles/Signup.css";

export default function Signup() {
  return (
    <div className="signup">
      <div className="signup__container">
        <h1 className="signup-title">Signup</h1>
        <form className="signup-form">
          <input className="box" type="text" placeholder="Username" />
          <input className="box" type="email" placeholder="Email" />
          <input className="box" type="password" placeholder="Password" />
          <input
            className="box"
            type="password"
            placeholder="Confirm Password"
          />
          <button className="btn" type="submit">
            Signup
          </button>
        </form>

        <div className="signup__container_login">
          <h4>Already have an account?</h4>
          <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
}