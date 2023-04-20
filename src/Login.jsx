import React, { useState,useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import LOGIN_API_URL from './config';

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
      const response = await axios.post(LOGIN_API_URL, {
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
    <div className="container">
    <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
