import React from "react";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-white shadow-sm">
      <ul className="flex gap-8 justify-center">
        <Link to="/">
          <span className="flex items-center gap-1 font-mono">
            <SiLeetcode className="text-xl" /> Neetcode
          </span>
        </Link>
        <Link to="/problems">Problems</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
