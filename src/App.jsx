/*
 * Temporary problems array schema
 */
import React from "react";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
const problems = [{
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%"
},{
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "412%"
},
    {
        title: "202. Happy Number",
        difficulty: "Easy",
        acceptance: "54.9%"
    },
    {
        title: "203. Remove Linked List Elements",
        difficulty: "Hard",
        acceptance: "42%"
    }];
const AllProblem=()=>{
    return(
        problems.map((problem,key)=>{
            return(
                <ProblemStatement key={key} title={problem.title} difficulty={problem.difficulty} acceptance={problem.acceptance}/>
            
            )
        }
    ))
}
const ProblemStatement=({title,difficulty,acceptance})=>{
    return(
    <table>
        <tbody>

        <tr>
            
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
        </tbody>
    </table>
    )
}
const Root=()=>{
    return(
        <div>
            <h1>Root</h1>
        </div>
    )
}
const Signup=()=>{
    return(
        <div>
            <h1>Signup</h1>
        </div>
    )
}
const Login=()=>{
    return(
        <div>
            <h1>Login</h1>
        </div>
    )
}
const singleProblem=()=>{
    return(
        <div>
            <h1>Single Problem</h1>
        </div>
    )
}
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
    },
    {
        path: "/signup",
        element: <Signup/>
    },
    {
        path: "/login",
        element: <Login/>
    },{
        path: "/problems/all",
        element: <AllProblem/>
    },{
        path: "/problems/:problem_slug",
        element: <singleProblem/>
    }
  ]);



function App() {

    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */
    
    return (
        <div>
        <RouterProvider router={router} />
    </div>
  )
}
export default App
