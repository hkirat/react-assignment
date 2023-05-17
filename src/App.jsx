/*
 * Temporary problems array schema
 */
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import ProblemsListPage from "./components/ProblemsListPage";
import ProblemPage from "./components/ProblemPage";
import Navbar from "./components/Navbar";
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
        problemId: "5",
        title: "201. Bitwise AND of Numbers Range",
        difficulty: "Medium",
        acceptance: "42%",
        description: "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
        exampleIn: "left = 5, right = 7",
        exampleOut: "4"
    },
    {
        problemId: "6",
        title: "205. Add two numbers",
        difficulty: "Medium",
        acceptance: "41%",
        description: "Given two numbers, add them and return them in integer range. use MOD=1e9+7",
        exampleIn: "a = 100 , b = 200",
        exampleOut: "300"
    },
    {
        problemId: "7",
        title: "202. Happy Number",
        difficulty: "Easy",
        acceptance: "54.9%",
        description: "Write an algorithm to determine if a number n is happy.",
        exampleIn: "n = 19",
        exampleOut: "true"
    },
    {
        problemId: "8",
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
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/all-problems" element={<ProblemsListPage problems={problems} />} />
                <Route path="/problems/:pid" element={<ProblemPage problems={problems} />} />
                <Route path="*" element={<div>404 Page Not Found</div>} />
            </Routes>
        </BrowserRouter>
    )
}

// A demo component
// function ProblemStatement(props) {
//     const title = props.title;
//     const acceptance = props.acceptance;
//     const difficulty = props.difficulty;

//     return <tr>
//         <td>
//             {title}
//         </td>
//         <td>
//             {acceptance}
//         </td>
//         <td>
//             {difficulty}
//         </td>
//     </tr>
// }
export default App
