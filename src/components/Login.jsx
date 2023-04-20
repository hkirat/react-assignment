import React, { useState,useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import config from '../config';

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
      console.log("LOGIN_API_URL : "+config.LOGIN_API_URL)
      // Make login API call
      const response = await axios.post(config.LOGIN_API_URL, {
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
        <div className='container'>
            <div className='container mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                    <div className="modal-content rounded-4 shadow">
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <h1 className="fw-bold mb-0 fs-2">Login</h1>
                            <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body p-5 pt-0">
                            <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input
                                type="email"
                                className="form-control rounded-3"
                                id="floatingInput"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                            <input type="password" className="form-control rounded-3" 
                            id="floatingPassword" 
                            placeholder="Password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            ></input>
                            <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <button
                                className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                                type="submit"
                            >Login</button>
                            <small className="text-body-secondary"></small>
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