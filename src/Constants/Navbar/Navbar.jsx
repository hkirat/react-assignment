import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex h-10 justify-between bg-white shadow-lg items-ceter text-lg ">
      <div id="navbar-main" className="flex items-center gap-3 mx-3">
        <Link to={"/"}>
          <div className="logo-box flex-row">
            <img
              className="h-5"
              src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg"
              alt="logo"
            />
          </div>
        </Link>
        <div className="nav-options">
          <Link to={"/problemset/all/"}>Problems</Link>
        </div>
        <div className="nav-options">
          <Link to={"/signup"}>Signup</Link>
        </div>
        <div className="nav-options">
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
      <button>Premium</button>
    </div>
  );
};

export default Navbar;
