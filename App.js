import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Componenets/Login";
import { SignUp } from "./Componenets/SignUp";
import { Problems } from "./Componenets/Problems";
import { Problem } from "./Componenets/Problem";
/*
 * Temporary problems array schema
 */
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

function App() {
  /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/problems/all/" element={<Problems />}></Route>
        <Route path="/problems/:problem_id" element={<Problem />}></Route>
      </Routes>
    </div>
  );
}

export default App;
