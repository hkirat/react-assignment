import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

const Navbar=()=>{
    return (
        <div className="container">

            <div className="logo">
                <h4>LeetCode</h4>
            </div>
            <div className='nav-items'>
                <ul>
                    <Link to={"/problemset/all"} className="link"><li >problems </li></Link>
                    <Link to={"/login"} className="link"><li >login </li></Link>
                    <Link to={"/signup"} className="link"><li >signup </li></Link>
                    {/* <Link to="/problemset/1"><li >signup </li></a> */}
                </ul>
             </div>

        </div>
    ) 
}

export default Navbar;