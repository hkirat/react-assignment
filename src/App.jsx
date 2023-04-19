/*
 * Temporary problems array schema
 */
import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Root from "./components/Root";
import SingleProblem from "./components/SingleProblem";

import AllProblems from "./components/AllProblems";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";



//adding routes
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
        element: <AllProblems/>
    },{
        path: "/problems/:problem_slug",
        element: <SingleProblem/>
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
