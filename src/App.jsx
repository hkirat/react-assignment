import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Problem from "./components/Problem";
import AllProblems from "./components/AllProblems";
import Home from "./components/Home";
/*
 * Temporary problems array schema
 */
const problems = [
    {
        index: "201",
        title: "Bitwise AND of Numbers Range",
        difficulty: "Medium",
        acceptance: "42%",
        description: "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
        exampleIn: "left = 5, right = 7",
        exampleOut: "4"
    },
    {
        index: "202",
        title: " Add two numbers",
        difficulty: "Medium",
        acceptance: "41%",
        description: "Given two numbers, add them and return them in integer range. use MOD=1e9+7",
        exampleIn: "a = 100 , b = 200",
        exampleOut: "300"
    },
    {
        index: "203",
        title: "Happy Number",
        difficulty: "Easy",
        acceptance: "54.9%",
        description: "Write an algorithm to determine if a number n is happy.",
        exampleIn: "n = 19",
        exampleOut: "true"
    },
    {
        index: "204",
        title: "Remove Linked List Elements",
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
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/problems/:problem_slug" element={<Problem props={problems} />} />
                <Route path="/problems" element={<AllProblems props={problems} />} />
            </Routes>
        </BrowserRouter>
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
