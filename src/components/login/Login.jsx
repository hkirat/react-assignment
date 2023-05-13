import React from "react";
import leetcode from "../../../public/leetcode.png";
import "./Login.css";

export default function Login() {
  return (
    <div className="container">
      <form className="form">
        <img className="leetcode-logo" src={leetcode} />
        <h2>Leetcode</h2>
        <input className="input" type="email" placeholder="Email" required />
        <input
          className="input"
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
