/*
 * Temporary problems array schema
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Problems from "./components/Problems";
import Problem from "./components/Problem";
import Header from "./components/Header";
import "./App.css";



function App() {

    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

    return (
        
    <div className="app">
       
       <BrowserRouter>
       <Header/>
       <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/problemset/all/" element={<Problems/>}></Route>
        <Route path="/problems/" element={<Problem/>}></Route>
       </Routes>
       </BrowserRouter>
    </div>
  )
}

// A demo component

export default App
