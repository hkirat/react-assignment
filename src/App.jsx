import React from "react"
import './App.css'
import ProblemPage from "./pages/problemPage/problemPage"
import ProblemsListPage from "./pages/problemsListPage/problemsListPage"
import SignInPage from "./pages/signinpage/signinPage"
import SignUpPage from "./pages/signupPage/signupPage"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: ("/"),
        element: <SignInPage />,
    },
    {
        path: "/signup",
        element: <SignUpPage />,
    },
    {
        path: "/problems",
        element: <ProblemsListPage />,
    },
    {
        path: "/problems/:id",
        element: <ProblemPage />,
    },

]);

function App() {

    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

    return (

        <RouterProvider router={router} />

    )
}

// A demo component

export default App
