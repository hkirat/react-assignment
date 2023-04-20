// Layout.jsx

import React,{ useState,useContext } from 'react';
import { Link, useLocation,useNavigate } from "react-router-dom";
import AuthContext from '../AuthContext';

const Layout = (props) => {
  // Get the current location
  const location = useLocation();
  // Extract the pathname from the location object
  const { pathname } = location;
  const { setAuthState } = useContext(AuthContext);
   // Conditionally render login button
   const renderHeaderButtons = () => {
    const navigate = useNavigate(); // Get the navigate function
    const handleLoginClick = () => {
      // Handle login button click
      navigate("/login"); // Redirect to /login page
    };
    const handleSignupClick = () => {
      // Handle signup button click
      navigate("/signup"); // Redirect to /signup page
    };
    const handleLogoutClick = () => {
      // Update auth state
        setAuthState({ isLoggedIn: false, token: null });
        console.log("User log out successful")
        // Navigate to login page
        navigate('/login');
    };
    if (pathname === "/signup") {
      return (
        <button type="button" className="btn btn-secondary" onClick={handleLoginClick} >Login</button>
      );
      
    } else if (pathname === "/"){
      return(
        <button type="button" className="btn btn-warning" onClick={handleLogoutClick}>Logout</button> 
      );
    }
  };
  // You can define the layout structure here
  return (
    <div>
      <header className='p-3 text-bg-dark'>
        {/* Header content */}
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a xlinkHref="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a xlinkHref="#" className="nav-link px-2 text-secondary">Explore</a></li>
          <li><a xlinkHref="#" className="nav-link px-2 text-white">Problems</a></li>
          <li><a xlinkHref="#" className="nav-link px-2 text-white">Contest</a></li>
          <li><a xlinkHref="#" className="nav-link px-2 text-white">Discuss</a></li>
          <li><a xlinkHref="#" className="nav-link px-2 text-white">Interview</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" 
          placeholder="Search..." aria-label="Search" />
          
        </form>

        <div className="text-end">
          {renderHeaderButtons()}
        </div>
      </div>
      </header>
      <main>
        {props.children}
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default Layout;
