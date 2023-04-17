import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handelClick = () => {
    navigate("/signup");
  };

  const handelLogin = () => {
    navigate("/");
  };
  return (
    <div className="FormDiv">
      <form className="LoginBox">
        <input type="email" className="username" placeholder="email" />
        <input type="password" className="password" placeholder="pasword" />
        <button className="submit" onClick={handelLogin}>
          Login
        </button>
        <div className="create">
          <span className="forget">Forgot password?</span>
          <span className="register" onClick={handelClick}>
            signup
          </span>
        </div>
      </form>
    </div>
  );
}
