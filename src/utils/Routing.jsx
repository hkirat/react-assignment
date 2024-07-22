import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from '../Components/Login';
import Problems from '../Components/Problems';


function Routing() {
    

    return (
       
            <Routes>
            {/* <Route path="/" element={<App />} /> */}
            <Route path="/problemset/all" element={<Problems />} />
            <Route path="/login" element={<Login />} />
            </Routes>

        
    )
}
export default Routing;