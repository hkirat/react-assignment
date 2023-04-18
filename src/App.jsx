import React from "react";
import "./index.css";
import {Link}from 'react-router-dom';
const Landingpage = () => {
  return (
    <>
      <div className="landingPage-buttons">
        <Link to="/signup">
          <button id="button">Signup</button>
        </Link>

        <Link to="/login">
          <button id="button">Login</button>
        </Link>
      
         <Link to="/problems/all">
          <button id="button">Problems</button>
        </Link>
      
         <Link to="/problem-slug">
          <button id="button">Problem :slug</button>
        </Link>
      
      </div>
      <div className="shitcode"><p>SHIT-CODE</p></div>
    </>
  );
};

export default Landingpage;
