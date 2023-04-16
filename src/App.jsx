import React from "react";
import { BrowserRouter as Router,Routes,Route, Link } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login"
import SignUp from "./component/SignUp"
import Problem from "./component/Problem"
import ProblemSet from "./component/ProblemSet"

function App() {
    return (
        <div>
            <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/problemset/all">Problems</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
            </nav>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/problemset/all" element={<Problem/>}/>
                    <Route path="/problemset/:slug" element={<ProblemSet/>}/>
                </Routes>
            </Router>

          
        </div>
    )
}

// A demo component
function ProblemStatement(props) {
    const title = props.title;
    const acceptance = props.acceptance;
    const difficulty = props.difficulty;

    return <tr>
        <td>
            {title}
        </td>
        <td>
            {acceptance}
        </td>
        <td>
            {difficulty}
        </td>
    </tr>
}
export default App
