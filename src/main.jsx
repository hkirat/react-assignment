import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import Landingpage from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './components/signup/Signup';
import Login from './components/login/login';
import Problems from './components/problemset/all/problems';
import Problemslug from './components/problemset/problem_slug/problem-slug';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage/>,
  },
  {
    path: "signup",
    element: <Signup/>,
  },
  {
    path : "/login",
    element:<Login/>,
  },
  {
   path:"/problems/all",
   element:<Problems/>, 
  },
  {
    path:"/problem-slug",
    element: <Problemslug/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
)
