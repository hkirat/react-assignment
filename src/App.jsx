import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from './Views/NavBar';
import { ProblemList } from './Components/ProblemList';
import { ProblemStatement } from './Components/ProblemStatement';
import problems from '../temp_data/problemList';
import SignUpView from './Views/SignUpView';
/*
 * Temporary problems array schema
 *
const problems = [{
    _id: 200,
    title: "200. Number of Islands",
    difficulty: "Medium",
    acceptance: "57.1%"
},{
    _id: 201,
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "41.2%"
},
    {
        _id: 202,
        title: "202. Happy Number",
        difficulty: "Easy",
        acceptance: "54.9%"
    },
    {
        _id: 203,
        title: "203. Remove Linked List Elements",
        difficulty: "Hard",
        acceptance: "42%"
    }];
*/

console.log();


function App() {
    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

    return (
    <div>
        <NavBar/>
        <Routes>
            <Route exact path='/' element={<ProblemList problems={problems}/>}/>
            <Route path="/problemset/all/" element={<ProblemList problems={problems}/>}/>
            <Route path="/login" element={<SignUpView/>}/>
            <Route path="/problems/:_id" element={<ProblemStatement/>}/>
        </Routes>
    </div>
  )
}

export default App
