import ProblemStatement from "./Components/problemStatement";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import AllProblems from "./Components/AllProblems";
import { BrowserRouter, Route , Routes } from "react-router-dom";



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
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/AllProblems" element={<AllProblems />} />
            <Route path="/ProblemStatement" element={<ProblemStatement />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
