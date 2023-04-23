import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
 return (
  <nav>
   <ul>
    <li>
     <Link to="/">Home</Link>
    </li>
    <li>
     <Link to="/login">Login</Link>
    </li>
    <li>
     <Link to="/signup">SignUp</Link>
    </li>
   </ul>
  </nav>
 )
}

export default Navbar