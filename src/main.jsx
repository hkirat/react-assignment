import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import AllProblems from "./Pages/AllProblems";
import Problem from "./Pages/Problem";
import Error from "./Pages/Error";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/problems/all" element={<AllProblems />} />
      <Route path="/problem/:id" element={<Problem />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
