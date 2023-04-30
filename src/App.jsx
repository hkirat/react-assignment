
import Loginpage from "./loginpage.jsx";
import Navbar from "./Navbar.jsx"
import {Routes, Route} from "react-router-dom";
import Homepage from "./Homepage.jsx";
import Problems from "./Problems.jsx";
import Problem from "./Problem.jsx";
import React from "react";
import LoginPage from "./loginpage.jsx";
function App(){
    return (
        <><Navbar/>
            <Routes>
                <Route path="/" element={<Problems/>}/>
                <Route path="/loginpage" element={<Loginpage/>}/>
                <Route path="/Problems/*" element={<Problems/>}/>
                {/*<Route path="/Contest" element={<Contest/>}/>*/}
                <Route path="/Problem" element={<Problem/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </>
    );


}
 export default App