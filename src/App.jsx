
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import ProblemsPage from './components/ProblemsPage';
import AllProblemsPage from './components/AllProblems';
import { useState } from 'react';
/*
 * Temporary problems array schema
 */
const problems = [{
    id:1,
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%"
},{
    id:2,
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "412%"
},
    {
        id:3,
        title: "202. Happy Number",
        difficulty: "Easy",
        acceptance: "54.9%"
    },
    {
        id:4,
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

    debugger;
    return (
    // <div>
    //     Finish the assignment! Look at the comments in App.jsx as a starting point
    // </div>
    <div className="wrapper">
      
      <BrowserRouter>
      <Navbar />
        <Routes>
           
          <Route path="/" element={<Dashboard />}/>
          <Route path="/login" element={<Login setToken={setToken} />}/>
          <Route path="/signup" element={<Signup setToken={setToken} />}/>
          <Route path="/problems" element={<AllProblemsPage/>}/>
          <Route path="/problems/:id" element={<ProblemsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
