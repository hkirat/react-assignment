import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-brand">LeetCode</div>
        <div className="navbar-links">
          <Link to="/premium">Premium</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/problems">Problems</Link>
          <Link to="/login">Sign In</Link>
        </div>
      </div>
    </div>
  );
}
