import React from "react";

function Login() {
  return (
    <div className="container">
      <form className="form">
        {/* <img className="leetcode-logo" src={leetcode} /> */}
        <h2>Leetcode Login</h2>
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
export default Login;