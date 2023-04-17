import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <h3 className="logo">LeetCode.</h3>
      </div>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/problemset/all"}>Problems</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>Sign Up</Link>
      </nav>
    </header>
  );
};

export default Header;
