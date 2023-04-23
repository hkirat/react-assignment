import React, { useState } from 'react';
import '../style/signup.css';
import {Link} from 'react-router-dom';

function Signup() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}`);
    // You can replace the above console.log with your actual signup logic
  };

  return (
    <div className='signup'>
        <div className="signup-container">
        <img src='../logo.svg'/>
        <form onSubmit={handleSubmit}>
          <input type="text" id="email" placeholder='username' value={username} onChange={(event) => setUsername(event.target.value)} required />
          <input type="password" id="password" placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)} required />
          <input type="password" id="confirm-password" placeholder='confirm-password' value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required />
          <input type="email" id="email" placeholder='E-mail address' value={email} onChange={(event) => setEmail(event.target.value)} required />
        <button type="submit">Sign Up</button>
        </form>
        <div><span>Have an account? </span><Link to='/login'>Sign in</Link></div>
        </div>
    </div>
  );
}

export default Signup;