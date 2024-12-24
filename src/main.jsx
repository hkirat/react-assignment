import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App'
import Login from "./Login";
import Signup from "./Signup";
import Problems from "./Problems";
import Problem from "./Problem";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<App />} > */}
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        
        <Route path='problemset/all' element={<Problems />} />
        <Route path='problems/:problem_slug' element={<Problem />} />
      {/* </Route> */}
    </Routes>  
  </BrowserRouter>,
)
