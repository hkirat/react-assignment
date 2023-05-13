import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Problems from "./components/problems/Problems";
import ProblemDetails from "./components/problems/problemdetails/ProblemDetails";
import Signup from "./components/signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/problems" element={<Problems />} />
        <Route exact path="/problemDetails/:id/" element={<ProblemDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
