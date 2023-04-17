import Login from "./components/Login";
import Problem from "./components/Problem";
import Problems from "./components/Problems";
import Signup from "./components/Signup";
import Home from "./components/home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

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
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />;
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/problems" element={<Problem />} />
        </Routes>
      </Router>
    </div>
  );
}

// A demo component
// function ProblemStatement(props) {
//     const title = props.title;
//     const acceptance = props.acceptance;
//     const difficulty = props.difficulty;

//     return <tr>
//         <td>
//             {title}
//         </td>
//         <td>
//             {acceptance}
//         </td>
//         <td>
//             {difficulty}
//         </td>
//     </tr>
// }
export default App;
