import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './app.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Problems from './pages/Problems'
import SingleProblem from './pages/SingleProblem'
import Navbar from './components/Navbar'
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
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/problems/all" element={<Problems/>}/>
                <Route path="/problems/:problemId" element={<SingleProblem/>}/>
            </Routes>
        </Router>
        
    )
}

export default App
