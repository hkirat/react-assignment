import React from "react";
import "./index.css";
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Signup from "./components/signup/Signup";
import Login from "./components/login/login";
import Problems from "./components/problemset/all/problems";
import Problemslug from "./components/problemset/problem_slug/problem-slug";
import Navbar from "./components/navbar/Navbar";
const Landingpage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="problems/all" element={<Problems />} />
        <Route path="problems/slug" element={<Problemslug />} />
      </Routes>



    </>
  )
};

const Home = () =>{
  return (
    <>
    <Navbar/>
    <div className="shitcode"><p>SHITCODE</p></div>
    </>
  )
}


export default Landingpage;
