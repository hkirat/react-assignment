import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import LoginPage from './page/LoginPage';
import HomePage from './page/HomePage';
import SignupPage from './page/SignupPage';
import DashboardPage from './page/DashboardPage';
import ProblemPage from './page/ProblemPage';
/*
 * Temporary problems array schema
 */
const problems = [{
        title: "201. Bitwise AND of Numbers Range",
        difficulty: "Medium",
        acceptance: "42%",
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        constraints: 'a < c',
        examples: 'a, 2, 3'
    },{
        title: "201. Bitwise AND of Numbers Range",
        difficulty: "Medium",
        acceptance: "41%"
    },{
        title: "202. Happy Number",
        difficulty: "Easy",
        acceptance: "54.9%"
    },{
        title: "203. Remove Linked List Elements",
        difficulty: "Hard",
        acceptance: "42%"
    }];


function App() {

    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route exact path="/login" element={<LoginPage/>}/>
                <Route path="/signup" element={<SignupPage/>} />
                <Route path="/problemset/all" element={<DashboardPage problems= {problems}/>} />
                <Route path="/problem/:problem_slug" element={<ProblemPage problem = {problems[0]} />} />
            </Routes>
        </Router>
  )
}
export default App
