import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Login</button>
      </form>
      <h4>
        Dont have an account ?{" "}
        <button>
          <Link to="/signup">SignUp</Link>
        </button>
      </h4>
    </div>
  );
};

export default Login;
