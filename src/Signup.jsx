import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // check if password and confirmPassword match
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
  
    // create the request body
    const body = {
    email,
    password,
    role: 'user',
    };
  
    try {
    // send the POST request to the /signup endpoint
    const response = await axios.post('http://localhost:3001/signup', {
        email,
        password,
        'role': 'user'
      });
    // handle the response
    if (response.ok) {
        // signup was successful
        // redirect the user to the login page or show a success message
        navigate('/login');
    } else {
        // signup failed
        // show an error message to the user
        navigate('/signup');
    }
    } catch (error) {
    // an error occurred while sending the request
    // show an error message to the user
        console.log(error.message)
        if(error.message='Request failed with status code 400')
        {
            alert('Unable to create the user. Please contact support');
            return;
        }
        navigate('/signup');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Signup;