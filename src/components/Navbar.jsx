import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import avatar from "../assets/default.jpg";

const Navbar = () => {
  const [active, setActive] = useState(true);
  return (
    <header className="flex mx-auto px-8 py-4 text-center sticky top-0 dark:bg-black  h-14 z-10 justify-center max-sm:justify-between sm:gap-20 sm:w-2/3">
      <Link to="/" className="mt-1 ">
        <img className="h-8 w-8" src={logo} alt="logo" />
      </Link>
      <ul className="flex  px-2 text-center justify-between max-sm:hidden">
        {/* <li className="hover:text-gray-400 mx-3 text-xl font-semibold">
          <Link to="/">Home</Link>
        </li> */}
        <li className="hover:text-gray-400 mx-3 text-xl font-semibold ">
          <Link to="/problems/all">Problems</Link>
        </li>
        <li className="hover:text-gray-400 mx-3 text-xl font-semibold  ">
          <Link to="/signup">signup</Link>
        </li>
        <li className="hover:text-gray-400 mx-3 text-xl font-semibold ">
          <Link to="/login">signin</Link>
        </li>
      </ul>

      {/* mobile screen bergers */}
      <div
        className="sm:hidden font-extrabold text-3xl max-sm:order-3"
        onClick={() => setActive((prev) => !prev)}
      >
        {active ? <> &#9776;</> : "X"}{" "}
      </div>
      <ul
        className={`sm:hidden ${
          active ? "hidden" : "inline-block"
        } " absolute top-16 right-0  w-full h-screen flex  flex-col gap-4 bg-slate-700 justify-start text-center pt-[70px] "`}
      >
        <li
          onClick={() => setActive((prev) => !prev)}
          className="hover:text-black mx-3 text-xl font-medium border-b border-gray-500 py-2 "
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => setActive((prev) => !prev)}
          className="hover:text-black mx-3 text-xl font-medium border-b border-gray-500 py-2 "
        >
          <Link to="/problems/all">Problems</Link>
        </li>
        <li
          onClick={() => setActive((prev) => !prev)}
          className="hover:text-black  mx-3 text-xl font-medium border-b border-gray-500 py-2   "
        >
          <Link to="/signup">signup</Link>
        </li>
        <li
          onClick={() => setActive((prev) => !prev)}
          className="hover:text-black mx-3 text-xl font-medium border-b border-gray-500 py-2  "
        >
          <Link to="/login">signin</Link>
        </li>
      </ul>

      {/* user image and signout here */}
      <div className="flex gap-4 max-sm:order-1 text-center justify-between items-center">
        <span className="font-normal text-xl max-sm:hidden">Arif Basha</span>
        <img
          src={avatar}
          alt="avatar"
          className="h-10 w-10 rounded-full bg-no-repeat bg-cover border border-gray-400 mt-2"
        />
      </div>
    </header>
  );
};

export default Navbar;
