import { BrowserRouter , Routes , Route } from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage"
import AllProblems from "./Components/AllProblems/AllProblems";

import Navbar from "./Constants/Navbar/Navbar"
import ProblemsPage from "./Components/ProblemsPage/ProblemsPage";
import Signup from "./Components/Signup/Signup"
import Login from "./Components/Login/Login"
import "./App.css"

/*
 * Temporary problems array schema
 */
const problems = [
    {
        problemId: "1",
        title: "201. Bitwise AND of Numbers Range",
        difficulty: "Medium",
        acceptance: "42%",
        description: "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
        exampleIn: "left = 5, right = 7",
        exampleOut: "4"
    },
    {
        problemId: "2",
        title: "205. Add two numbers",
        difficulty: "Medium",
        acceptance: "41%",
        description: "Given two numbers, add them and return them in integer range. use MOD=1e9+7",
        exampleIn: "a = 100 , b = 200",
        exampleOut: "300"
    },
    {
        problemId: "3",
        title: "202. Happy Number",
        difficulty: "Easy",
        acceptance: "54.9%",
        description: "Write an algorithm to determine if a number n is happy.",
        exampleIn: "n = 19",
        exampleOut: "true"
    },
    {
        problemId: "4",
        title: "203. Remove Linked List Elements",
        difficulty: "Hard",
        acceptance: "42%",
        description: "Given number k , removed kth element",
        exampleIn: "list: 1->2->3 , k=2",
        exampleOut: "1->3"
    },
    {
        problemId: "1",
        title: "201. Bitwise AND of Numbers Range",
        difficulty: "Medium",
        acceptance: "42%",
        description: "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
        exampleIn: "left = 5, right = 7",
        exampleOut: "4"
    },
    {
        problemId: "2",
        title: "205. Add two numbers",
        difficulty: "Medium",
        acceptance: "41%",
        description: "Given two numbers, add them and return them in integer range. use MOD=1e9+7",
        exampleIn: "a = 100 , b = 200",
        exampleOut: "300"
    },
    {
        problemId: "3",
        title: "202. Happy Number",
        difficulty: "Easy",
        acceptance: "54.9%",
        description: "Write an algorithm to determine if a number n is happy.",
        exampleIn: "n = 19",
        exampleOut: "true"
    },
    {
        problemId: "4",
        title: "203. Remove Linked List Elements",
        difficulty: "Hard",
        acceptance: "42%",
        description: "Given number k , removed kth element",
        exampleIn: "list: 1->2->3 , k=2",
        exampleOut: "1->3"
    }
];


function App() {

    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/problemset/all/" element={<AllProblems problems={problems} />} />
                <Route path="/problems/:pid/" element={<ProblemsPage problems={problems} />} />
                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
        </BrowserRouter>
    // <div>
    //     Finish the assignment! Look at the comments in App.jsx as a starting point
    // </div>
  )
}

export default App
