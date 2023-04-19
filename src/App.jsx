import React from "react";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Problems from "./Component/Problems";
import Signup from "./Component/Signup";
import ProblemDetails from "./Component/ProblemDetails";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/problems" element={<Problems />}></Route>
        <Route path="/problem/:problemId" element={<ProblemDetails />}></Route>
      </Routes>
    </div>
  );
}
