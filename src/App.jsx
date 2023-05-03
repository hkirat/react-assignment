
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Problem from "./components/Problem.jsx";
import Problemset from "./components/Problemset.jsx";
import Home from "./components/Home.jsx";



function App() {

    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

    return (
        <BrowserRouter>
            <div>

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="/problem" element={<Problem />}></Route>
                    <Route path="/problemset" element={<Problemset />}></Route>
                </Routes>

            </div>
        </BrowserRouter>
    )
}


export default App
