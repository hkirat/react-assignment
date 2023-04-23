import React from 'react';
import '../style/navbar.css'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
        <nav>
        <Link to="/"> 
            <img src='../logo.png' className='logo'/>
        </Link>
        <div className=''>
            <Link to="/problemset/all">problems</Link>
        </div>
        <ul>
            <li>
                <Link to="/signup">Register</Link>
            </li>
            <li>
                <Link to="/login">Sign in</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;