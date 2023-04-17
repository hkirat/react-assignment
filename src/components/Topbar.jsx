import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();
  const handelClick = () => {
    navigate("/signup");
  };
  const handelLogin = () => {
    navigate("/login");
  };
  return (
    <div className="topbar">
      <nav className="navbar">
        <ul className="list">
          <li className="options">Explore</li>
          <li className="options">Problems</li>
          <li className="options">contest</li>
          <li className="options">Discuss</li>
          <li className="options" onClick={handelClick}>
            signup
          </li>
          <li className="options" onClick={handelLogin}>
            Login
          </li>
        </ul>
      </nav>
      <div className="div"></div>
    </div>
  );
}

export default Topbar;
