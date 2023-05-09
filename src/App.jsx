import React from "react";
import "./index.css";
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Signup from "./components/signup/Signup";
import Login from "./components/login/login";
import Problems from "./components/problemset/all/problems";
import Problemslug from "./components/problemset/problem_slug/problem-slug";
import Navbar from "./components/navbar/Navbar";

const App = () => {
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

    <div className=" p-20 text-4xl text-black justify-content-center">
    
    <div className="my-5">Welcome to,</div>
    <div className="my-0 font-serif bold text-6xl"> Leetcode clone!</div>

    </div>
    <div className="my-40 mx-20"></div>
    </>
  )
}


export default App;
