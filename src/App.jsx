import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./Login";
import ProblemsPage from "./ProblemsPage";
import Home from "./Home";

/*
 * Temporary problems array schema
 */

function App() {
  /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

  return (
    <>
      <nav className="p-4 bg-gray-900 text-gray-400">
        <ul className="flex justify-evenly items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/problemset/all">Problems</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element/> */}
        <Route path="/problemset/all/" element={<ProblemsPage />} />
        {/* <Routes path="/problems/:problem_slug" /> */}
      </Routes>
    </>
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
