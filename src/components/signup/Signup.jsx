import React from 'react'
import "./Signup.css"
import { useNavigate } from 'react-router';
function Signup() {
  const navigate = useNavigate();
  const handleSignup = async (event) => {
    event.preventDefault();
    
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
    
  
    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password}),
      });
      if (response.ok) {
        // The server responded with a successful status code (e.g., 201)
        // Handle the successful signup here
        alert('user registered succesfully')
        navigate('/login')

      } else {
        // The server responded with an error status code (e.g., 400)
        // Handle the signup error here
        console.error('Signup failed!');
      }
    } catch (error) {
      // An error occurred while sending the request
      console.error('Network error!');
    }
  };
  
 
  
  return (
    <div className='container-signup'>
      
        <div className="sign">
            <h1>Sign Up</h1>
            <input className='sign-inp' type="email" placeholder='email address' />
            <input className='sign-inp' type="password" placeholder='password' />
            <input className='sign-inp' type="text " placeholder='username' />
            <button className='sign-btn' onClick={handleSignup} >Signup</button>
        </div>
    </div>
  )
}

export default Signup