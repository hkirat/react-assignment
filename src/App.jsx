import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProblemList from "./pages/ProblemList";
import Problem from "./pages/Problem";
import Navbar from "./pages/Navbar";
/*
 * Temporary problems array schema
 */
const problems = [
  {
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%",
    description: "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
    example: "Input: left = 5, right = 7 Output: 4"
  },
  {
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "412%",
    description: "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
    example: "Input: left = 5, right = 7 Output: 4"
  },
  {
    title: "202. Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%",
    description: "Write an algorithm to determine if a number n is happy. A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits. Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy. Return true if n is a happy number, and false if not.",
    example: "Input: n = 19 Output: true Explanation: 12 + 92 = 82 82 + 22 = 68 62 + 82 = 100 12 + 02 + 02 = 1"
  },
  {
    title: "203. Remove Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%",
    description: "Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.",
    example: "Input: head = [1,2,6,3,4,5,6], val = 6 Output: [1,2,3,4,5]"
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
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/problemset/all" element={<ProblemList problems={problems} />} />
          <Route path="/problems/:problem_slug" element={<Problem problems={problems} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
