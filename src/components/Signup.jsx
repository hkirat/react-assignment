import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
