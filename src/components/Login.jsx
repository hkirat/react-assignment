import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="loginPage">
      <h3 className="logo">LeetCode</h3>
      <form>
        <input type="email" placeholder="Email " />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <div className="loginLinks">
        <Link to="/forgotpassword">Forgot Password?</Link>
        <Link to={"/signup"}>Sign Up</Link>
      </div>
    </section>
  );
};

export default Login;
