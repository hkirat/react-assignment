/*
 * Temporary problems array schema
 */
import ProblemStatement from "./Pages/SingleQuestion";
import Home from "./Pages/Home";
import NavBar from "./component/NavBar";
import Login from "./Pages/LogIN";
import SignUp from "./Pages/SignUp";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from "react-router-dom";
const problems = [{
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%",
    status1: false
},{
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "412%",
    status1: false
},
    {
        title: "202. Happy Number",
        difficulty: "Easy",
        acceptance: "54.9%",
        status1: false
    },
    {
        title: "203. Remove Linked List Elements",
        difficulty: "Hard",
        acceptance: "42%",
        status1: false
    }];
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<SignUp/>}></Route>
                <Route path="/" element={<Navigate to='/problems'/>}></Route>
                <Route path='/problems' element={<NavBar/>} >
                    <Route index element={<Home/>}></Route>
                    <Route path="/problems/:id" element={<ProblemStatement/>}></Route>
                </Route>
            </Route>
            
        )
    )
  

function App() {

    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

    return (
    <div>
        {/* Finish the assignment! Look at the comments in App.jsx as a starting point
         */}
         <RouterProvider router={router}/>
    </div>
  )
}

// A demo component

export default App
