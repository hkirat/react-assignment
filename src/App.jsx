import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Navbar from "./components/Navbar/Navbar";
import ProblemSets from "./components/ProblemSets/ProblemSets";
import SinglePage from "./components/SinglePage/SinglePage";

/*
 * Temporary problems array schema
 */
const problems = [
    {
      problemId: "1",
      title: "201. Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "42%",
      description:
        "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
      exampleIn: "left = 5, right = 7",
      exampleOut: "4",
    },
    {
      problemId: "2",
      title: "205. Add two numbers",
      difficulty: "Medium",
      acceptance: "41%",
      description:
        "Given two numbers, add them and return them in integer range. use MOD=1e9+7",
      exampleIn: "a = 100 , b = 200",
      exampleOut: "300",
    },
    {
      problemId: "3",
      title: "202. Happy Number",
      difficulty: "Easy",
      acceptance: "54.9%",
      description: "Write an algorithm to determine if a number n is happy.",
      exampleIn: "n = 19",
      exampleOut: "true",
    },
    {
      problemId: "4",
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%",
      description: "Given number k , removed kth element",
      exampleIn: "list: 1->2->3 , k=2",
      exampleOut: "1->3",
    },
    {
      problemId: "1",
      title: "201. Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "42%",
      description:
        "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
      exampleIn: "left = 5, right = 7",
      exampleOut: "4",
    },
    {
      problemId: "2",
      title: "205. Add two numbers",
      difficulty: "Medium",
      acceptance: "41%",
      description:
        "Given two numbers, add them and return them in integer range. use MOD=1e9+7",
      exampleIn: "a = 100 , b = 200",
      exampleOut: "300",
    },
    {
      problemId: "3",
      title: "202. Happy Number",
      difficulty: "Easy",
      acceptance: "54.9%",
      description: "Write an algorithm to determine if a number n is happy.",
      exampleIn: "n = 19",
      exampleOut: "true",
    },
    {
      problemId: "4",
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%",
      description: "Given number k , removed kth element",
      exampleIn: "list: 1->2->3 , k=2",
      exampleOut: "1->3",
    },
  ];


function App() {

    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

// const problem=[{
//     title:"hero"
// }];

    return (
    <div>
        
        <div>

            <Navbar />

            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/signup"element={<SignUp />}/>
                    <Route path="/problemset/all" element={<ProblemSets problems={problems} />} />
                    <Route path="/problems/:id" element={<SinglePage problems={problems}/>} />
                    {/* <Route path="*" element={<NoPage />} /> */}
                </Routes>
            </BrowserRouter>

        </div>

        Finish the assignment! Look at the comments in App.jsx as a starting point
    </div>
  )
}

// A demo component

export default App
