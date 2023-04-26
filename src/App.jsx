/*
 * Temporary problems array schema
 */



import NavBar from "./components/NavBar.jsx";
import {Route, Routes} from "react-router-dom";
import Explore from './components/Explore.jsx';
import SingIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import Problems from './components/Problems.jsx';
import Problem from './components/Problem.jsx';
import Contest from './components/Contest.jsx';
import Interview from './components/Interview.jsx';
import Discuss from './components/Discuss.jsx';



function App() {

    /* Add routing here, routes look like -
    /login - Login page
    /signup - Signup page
    /problem set/all/ - All problems (see problems array above)
    /problems/:problem_slug - A single problem page
    */

    return (
        <>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Explore/>} />
                <Route path='/login' element={<SingIn/>} />
                <Route path='/signup' element={<SignUp/>} />
                <Route path='/problems' element={<Problems/>} />
                <Route path='/problems/:id' element={<Problem />} />
                <Route path='/contest' element={<Contest/>} />
                <Route path='/interview' element={<Interview/>} />
                <Route path='/discuss' element={<Discuss/>} />
            </Routes>
        </>
    )
}

// A demo component

export default App
