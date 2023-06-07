import {Route, Routes, Link, BrowserRouter} from "react-router-dom";
import Login from "./components/login.jsx";
import Signup from "./components/signup.jsx";
import Problem from "./components/problem.jsx";
import ProblemSet from "./components/problemSet.jsx";
import "./App.css"
import Home from "./components/home.jsx";
import Header from "./components/header.jsx";

function App() {

    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

    return (
    <BrowserRouter>
        {/*Finish the assignment! Look at the comments in App.jsx as a starting point*/}
        <header>
            <Link to = "/"><span id="f-leetcode-header">F-leetcode</span></Link>
        <ul className="header-list">
            <li><Link to = "/login" >Login </Link></li>
            <li><Link to = "/signup" >Signup </Link></li>
            <li><Link to = "/problems" >Problems </Link></li>
        </ul>
        </header>
        <Routes>
            <Route exact path="/" element = {<Home/>}/>
            <Route exact path ="/login" element = {<Login/>}/>
            <Route exact path ="/signup" element = {<Signup/>}/>
            <Route exact path ="/problems" element = {<ProblemSet/>}/>
            <Route exact path ="/problem" element = {<Problem/>}/>

        </Routes>
    </BrowserRouter>
  )
}

export default App
