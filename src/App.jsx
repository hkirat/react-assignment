/*
 * Temporary problems array schema
 */

import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComp from "./components/LoginComp/Login";
import SignupComp from "./components/SignUp/Signup";
import HomePage from "./components/HomePage/HomePage";
import Problems from "./components/ProblemsComp/ProblemsPage";



function App() {

    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/login' element={<LoginComp />} />
                <Route path="/signup" element={<SignupComp />} />
                {/* <Route path="/problems-set" element={<ProblemsSet />} /> */}
                <Route path='/problems' element={<Problems />} />
            </Routes>
        </BrowserRouter>
    )
}

// A demo component

export default App
