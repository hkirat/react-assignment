import React, { useState } from 'react';
import "./Login.css";
import { useNavigate } from 'react-router';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // do something with the token returned from the backend, such as saving it to localStorage or redirecting to a new page
      navigate('/problemset/all')
    })
    .catch((error) => {
      console.error('Error:', error);
      alert("inavlid email/passwordb")
    });
  }
  
  return (
    <div className='container-login'>
        <div className="log">
            <h1>LOGIN</h1>
            
              <input className='sign-inp' type="email" placeholder='email address' value={email} onChange={e => setEmail(e.target.value)} />
              <input className='sign-inp' type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
              <button className='sign-btn' type="submit" onClick={handleLogin}>Login</button>
            
        </div>
    </div>
  );
}

export default Login;
