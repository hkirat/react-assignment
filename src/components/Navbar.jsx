import React from 'react'
import "../styles/Navbar.css";
import leetcode from "../assets/leetcode.png"
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className='container'>
                <div className="logo">
                <Link className="item" to='/login'>
                <img width={24} height={24} className='logo' src={leetcode} />
                </Link>
                <Link className="item" to='/login'>
                <div>LeetCode</div> 
                </Link>
                {/* Different Pages */}
                </div>
                <Link className="item" to="/problemset/all"><div >Problems</div></Link>
                <Link className="item" to='/signup'><div>Sign Up</div></Link>
                <Link className="item" to='/login'><div>Log In</div></Link>
            </div>
            <hr />
        </>
    )
}

export default Navbar