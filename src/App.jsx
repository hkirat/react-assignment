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
    problemId: "201",
    title: "Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%",
    question:
      "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive",
    examples: [
      {
        title: "example 1",
        Input: "left = 5, right = 7",
        Output: "4",
      },
      {
        title: "example 2",
        Input: "left = 0, right = 0",
        Output: "0",
      },
      {
        title: "example 3",
        Input: "left = 1, right = 2147483647",
        Output: "0",
      },
    ],
  },

  {
    problemId: "202",
    title: "Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%",
    question: "Write an algorithm to determine if a number n is happy.",
    examples: [
      {
        Input: "n = 19",
        Output: "true",
      },
      {
        Input: "n = 2",
        Output: "false",
      },
    ],
  },
  {
    problemId: "203",
    title: "Remove Linked List Elements",
    difficulty: "Easy",
    acceptance: "42%",
    question:
      "Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.",
    examples: [
      {
        Input: "head = [1,2,6,3,4,5,6], val = 6",
        Output: "[1,2,3,4,5]",
      },
      {
        Input: "head = [], val = 1",
        Output: "[]",
      },
      {
        Input: "head = [7,7,7,7], val = 7",
        Output: "[]",
      },
    ],
  },
  {
    problemId: "204",
    title: "Count Primes",
    difficulty: "Medium",
    acceptance: "33.1%",
    question:
      "Given an integer n, return the number of prime numbers that are strictly less than n.",
    examples: [
      {
        Input: "n = 10",
        Output: "4",
      },
      {
        Input: "n = 0",
        Output: "0",
      },
      {
        Input: "n = 1",
        Output: "0",
      },
    ],
  },
  {
    problemId: "212",
    title: "Word Search II",
    difficulty: "Hard",
    acceptance: "36.4%",
    question:
      "Given an m x n board of characters and a list of strings words, return all words on the board.\n Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.",
    examples: [
      {
        Input: `board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]`,
        Output: `["eat","oath"]`,
      },
      {
        Input: `board = [["a","b"],["c","d"]], words = ["abcb"]`,
        Output: "[]",
      },
    ],
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
