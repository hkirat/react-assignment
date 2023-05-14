import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [active, setActive] = useState(true);
  return (
    <header className="flex mx-auto px-8 py-4 text-center sticky top-0 dark:bg-black  h-14 z-10 justify-center max-sm:justify-between gap-2 sm:w-2/3">
      <Link to="/" className="mt-1">
        <div className="w-8 h-4 flex-1">
          <img className="" src={logo} alt="logo" />
        </div>
      </Link>
      <ul className="flex  p-2 text-center justify-between max-sm:hidden">
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
      <div
        className="sm:hidden font-extrabold text-3xl "
        onClick={() => setActive((prev) => !prev)}
      >
        {active ? <> &#9776;</> : "X"}{" "}
      </div>
      <ul
        className={`sm:hidden ${
          active ? "hidden" : "inline-block"
        } " absolute top-16 right-0  w-full h-screen flex  flex-col gap-4 bg-slate-400 justify-start text-center pt-[70px] "`}
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
    </header>
  );
};

export default Navbar;
