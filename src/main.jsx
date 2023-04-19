import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import AllProblems from "./Pages/AllProblems";
import Problem from "./Pages/Problem";

ReactDOM.createRoot(document.getElementById("root")).render(
  /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
  */
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/problems/all" element={<AllProblems />} />
      <Route path="/problem/sr/:sr" element={<Problem />} />
    </Routes>
  </BrowserRouter>
);
