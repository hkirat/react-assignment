import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section className="loginPage">
      <h3 className="logo">LeetCode</h3>
      <form>
        <input type="text" placeholder="Username " />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <input type="email" placeholder="Email " />
        <button type="submit">Sign Up</button>
      </form>
      <div className="signUpLinks">
        <span>Have an account?</span> <Link to={"/login"}>Log In</Link>
      </div>
    </section>
  );
};

export default SignUp;
