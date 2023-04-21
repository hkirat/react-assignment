import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";

import ProblemsPage from "./ProblemsPage";
import ProblemDescription from "./ProblemDescription";
import "../assets/Header.css";
import problems from "../questions";

function Header() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Jeetcode</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/problems/all">problems</Link>
            </li>
          
          </ul>
        </nav>
      </header>

      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/problems/all" element={<ProblemsPage />} />
        <Route
          exact
          path="/problem/:id"
          element={<ProblemDescription problems={problems}/>}
        />
      </Routes>
    </Router>
  );
}

export default Header;
