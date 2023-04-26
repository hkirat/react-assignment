import React from 'react'
import { Link } from "react-router-dom";
import './navbar.css';
import navLogo from '../../assets/logo-navbar.png'

const Navbar = () => {


    return (
        <div id='navbar'>
            <ul className='nav-left'>
                <li id='navLogo'><Link to={"/"} className="nav-link" id='nav-logo-link'><img src={navLogo} width="22px" /></Link></li>
                <li id='navExplore'><Link to={"/"} className="nav-link" id='explore-link'><p>Explore</p></Link></li>
                <li id='navProblems'><Link to={"/problems"} className="nav-link" id='problems-link'><p>Problems</p></Link></li>
            </ul>
            <ul className='nav-right'>
                <li id='navPremium'><Link className="nav-link" id='premium-link'><p>Premium</p></Link></li>
                <li id='navSignup'><Link to={'/signup'} className="nav-link" id='signup-link'><p>Signup</p></Link></li>
                <li id='navSignin'><Link to={'/signin'} className="nav-link" id='signin-link'><p>Signin</p></Link></li>
            </ul>
        </div>
    )
}


export default Navbar;