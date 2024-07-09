import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center px-12 lg:px-40 list-none py-4 pb-10">
        <div>
          <Link to="/" className="flex justify-center items-center">
            <img src={Logo} alt="NeetCode logo" />
            <p>NeetCode</p>
          </Link>
        </div>
        <li>
          <Link to="/problems/all">Problems</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </nav>
    </div>
  );
};

export default Navbar;
