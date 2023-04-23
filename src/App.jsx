import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './style/problems.css'
import Problems from "./components/Problems.jsx";
import SingleProblem from "./components/SingleProblem.jsx";
import Navbar from "./components/Navbar.jsx";
import './App.css';

function App() {

    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

    return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<Signup/>} />
          <Route path="problemset/all" element={<Problems/>}/>
          <Route path="problems/:title" element={<SingleProblem/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

// A demo component
function ProblemStatement(props) {
    const title = props.title;
    const acceptance = props.acceptance;
    const difficulty = props.difficulty;

    return(
        <table>
        <tr>
        <td><span className="title">{title}</span></td>
        <td>{acceptance}</td>
        <td>{difficulty}</td>
        </tr>
        </table>
    )
}

export default App