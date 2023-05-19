import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';

function Navbar() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="brand">Peetcode</div> 
        <ol className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">Login</li>
          <li className="nav-item">Register</li>
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
