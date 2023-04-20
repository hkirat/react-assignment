import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/signup";
import Login from "./components/login";
import AllProblems from "./components/AllProblems";
import Slug from "./problems/[slug]";
import { useState } from "react";

const Index = () => {
  const problems = [
    {
      title: "201. Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "42%",
    },
    {
      title: "201. Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "412%",
    },
    {
      title: "202. Happy Number",
      difficulty: "Easy",
      acceptance: "54.9%",
    },
    {
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%",
    },
  ];
  const [data, setData] = useState([]);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/problemset/all"
          element={
            <AllProblems problems={problems} data={data} setData={setData} />
          }
        />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/problemset/:slug"
          element={<Slug problems={problems} data={data} />}
        />
      </Routes>
    </Router>
  );
};

export default Index;
