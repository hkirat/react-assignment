import React, { useState,useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setAuthState } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform validation on email and password
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    try {
      // Make login API call
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password,
        'role': 'user'
      });

      // Check if response status is 200 and token is returned in the response body
      if (response.status === 200 && response.data.token) {
        // Handle successful login
        // You can store the token in local storage, Redux store, or a cookie for further use
        console.log('Login successful:', response.data.token);
        setAuthState({ isLoggedIn: true, token: response.data.token });
        navigate('/')
      } else {
        // Handle login error
        console.error('Login failed:', response);
        alert('Failed to login. Please check your email and password.');
      }
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error);
      alert('Failed to login. Please try again later.');
    }

    // Reset email and password fields after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginPage;
