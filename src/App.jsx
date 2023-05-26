import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Problem from "./pages/Problem";
import ProblemList from "./pages/ProblemList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/problemlist" element={<ProblemList />} />
      <Route path="/problem" element={<Problem />} />
    </Routes>
  );
};

export default App;
