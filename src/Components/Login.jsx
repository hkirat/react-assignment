import React from "react";
import { Link } from "react-router-dom";
import "./ComponentsStyles/Login.css";

export default function Login() {
  return (
    <div className="login-div">
      <h1 className="login-title">Login</h1>
      <form className="login-form">
        <input className="box" type="text" placeholder="Enter your username" />
        <input
          className="box"
          type="password"
          placeholder="Enter your password"
        />
        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
