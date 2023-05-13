import React from "react";
import { NavLink, Link } from "react-router-dom";
import leetcode from "../../../public/leetcode.png";
import "./NavBar.css";

function Navbar() {
  return (
    <nav className="">
      <div className="nav-container">
        <div className="logo" style={{ display: "flex", alignItems: "center" }}>
          <img className="leetcode-logo" src={leetcode} />
          <Link to="/">LeetCode</Link>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink activeClassName="active" to="/problems">
              Problems
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/signup">
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
