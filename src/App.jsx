import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AllProblems from "./components/AllProblems";
import ProblemDetails from "./components/ProblemDetails";
import Home from "./components/Home";
import Header from "./components/Header";

/*
 * Temporary problems array schema
 */
const problems = [
  {
    problemId: 201,
    title: "Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%",
  },

  {
    problemId: 202,
    title: "Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%",
  },
  {
    problemId: 203,
    title: "Remove Linked List Elements",
    difficulty: "Easy",
    acceptance: "42%",
  },
  {
    problemId: 204,
    title: "Count Primes",
    difficulty: "Medium",
    acceptance: "33.1%",
  },
  {
    problemId: 212,
    title: "Word Search II",
    difficulty: "Hard",
    acceptance: "36.4%",
  },
];

function App() {
  /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/problemset/all"
          element={<AllProblems problems={problems} />}
        />
        <Route
          path="/problems/:id"
          element={<ProblemDetails problems={problems} />}
        />
      </Routes>
    </Router>
  );
}

// A demo component
function ProblemStatement(props) {
  const title = props.title;
  const acceptance = props.acceptance;
  const difficulty = props.difficulty;

  return (
    <tr>
      <td>{title}</td>
      <td>{acceptance}</td>
      <td>{difficulty}</td>
    </tr>
  );
}
export default App;
