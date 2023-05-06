import React from "react";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Problemset from "./Problemset";


function App() {

    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

    return (
    
        <BrowserRouter>
            <div>
            <Routes>
                <Route path="" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="problemset" element={<Problemset />} />

            </Routes>
            </div>
        </BrowserRouter>

        
   
  )
}


export default App
