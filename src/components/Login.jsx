import React, { useState } from 'react';
import '../style/signup.css';
import {Link} from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // You can replace the above console.log with your actual signup logic
  };

  return (
    <div className='signup'>
        <div className="signup-container">
        <img src='../logo.svg'/>
        <form onSubmit={handleSubmit}>
            <input type="email" id="email" placeholder='E-mail address' value={email} onChange={(event) => setEmail(event.target.value)} required />
            <input type="password" id="password" placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)} required />
        <button type="submit">Log in</button>
        </form>
        <div className='alternatives'>
            <span>forget password?</span>
            <Link to='/signup'>Signup</Link>
        </div>
        </div>
    </div>
  );
}

export default Login;