import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Layout.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="container nav">
        <div className="brand">Peetcode</div> 
        <ol className="nav-list">
          <li className="nav-item"><Link to="">Home</Link></li>
          <li className="nav-item"><Link to="login">Login</Link></li>
          <li className="nav-item"><Link to="signup">Signup</Link></li>
          <li className="nav-item"><Link to="problemsets">Problemsets</Link></li>
        </ol>
      </div>
    </div>
  )
}

export default function Layout() {
  return (
    <>
      <Navbar /> 
      <Outlet /> 
    </>
  )
}
