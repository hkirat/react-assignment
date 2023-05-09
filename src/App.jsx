import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Allproblems from "./pages/Allproblems";
import Home from "./pages/Home";
import Pagenotfound from "./pages/Pagenotfound";
import Problems from "./pages/problem";
import Signin from "./pages/Signin";
import Signup from "./pages/signup";
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
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/problem/:id" element={<Problems />} />
          <Route path="/problems/all" element={<Allproblems />} />
          <Route path="/*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
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
