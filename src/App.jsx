import React from "react";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Problem from "./components/Problem";
import ProblemSet from "./components/ProblemSet";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// const problems = [
//   {
//     title: "201. Bitwise AND of Numbers Range",
//     difficulty: "Medium",
//     acceptance: "42%",
//   },
//   {
//     title: "201. Bitwise AND of Numbers Range",
//     difficulty: "Medium",
//     acceptance: "412%",
//   },
//   {
//     title: "202. Happy Number",
//     difficulty: "Easy",
//     acceptance: "54.9%",
//   },
//   {
//     title: "203. Remove Linked List Elements",
//     difficulty: "Hard",
//     acceptance: "42%",
//   },
// ];

function App() {
  /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

  return (
    <div>
      <Router>
        <div className="nav">
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div></div>

          <Link to="/problemset/all">Problems</Link>
        </div>

        <Routes>
          <Route path="/login" element={<SignUp />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/problemset/all" element={<Problem />} />
        </Routes>
      </Router>
    </div>
  );
}

// // A demo component
// function ProblemStatement(props) {
//   const title = props.title;
//   const acceptance = props.acceptance;
//   const difficulty = props.difficulty;

//   return (
//     <tr>
//       <td>{title}</td>
//       <td>{acceptance}</td>
//       <td>{difficulty}</td>
//     </tr>
//   );
// }
export default App;
