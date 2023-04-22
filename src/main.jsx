import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import App from './App'
import './index.css'
import LoginPage from './Login/Login'
import SignupPage from './Signup/Signup'
import ProblemSetPage from './ProblemSet/ProblemSet'
import SingleProblemPage from './SingleProblem/SingleProblem'

const problems = [
  {
    id: 1,
    title: "200. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%"
  },
  {
    id: 2,
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "412%"
  },
  {
    id: 3,
    title: "202. Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%"
  },
  {
    id: 4,
    title: "203. Remove Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%"
  }
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "signup",
    element: <SignupPage />,
  },
  {
    path: "/problemset/all",
    element: <ProblemSetPage problems={problems}/>,
  },
  {
    path: "/problems/:problem_slug",
    element: <SingleProblemPage problems={problems}/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
