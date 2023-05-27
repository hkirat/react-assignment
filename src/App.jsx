import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import ProblemSet from "./pages/ProblemSet";
import Problem from "./pages/Problem";

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
  return (
    <BrowserRouter>
      <div className="bg-slate-100 h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/problems" element={<ProblemSet />} />
          <Route path="/problems/:problemId" element={<Problem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
