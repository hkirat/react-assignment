import React, { useState,useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import config from '../config';

function Signup(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform validation on name, email, password, and confirmPassword
    if (!email || !password || !confirmPassword) {
      alert('Please enter all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }

    try {
      // Make signup API call
      const response = await axios.post(config.SIGNUP_API_URL, {
        email,
        password,
      });

      // Check if response status is 201 and token is returned in the response body
      if (response.status === 200 && response.data.message=== "User signed up successfully") {
        // Handle successful signup
        // You can store the token in local storage, Redux store, or a cookie for further use
        console.log('Signup successful:', response.data.token);
        navigate('/login');
      } else {
        // Handle signup error
        console.error('Signup failed:', response);
        alert('Failed to signup. Please try again later.');
      }
    } catch (error) {
      // Handle signup error
      console.error('Signup failed:', error);
      alert('Failed to signup. Please try again later.');
    }

    // Reset form fields after submission
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };
    
    return (
        <div className='container'>
            <div className='container mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className="modal-content rounded-4 shadow">
                            <div className="modal-header p-5 pb-4 border-bottom-0">
                                <h1 className='fw-bold mb-0 fs-2'>Signup</h1>
                                <button
                                type='button'
                                className='btn-close'
                                data-bs-dismiss='modal'
                                aria-label='Close'
                                ></button>
                            </div>
                            <div className="modal-body p-5 pt-0">
                                <form onSubmit={handleSubmit}>
                                    <div className='form-floating mb-3'>
                                        <input
                                        type='email'
                                        className='form-control rounded-3'
                                        id='floatingEmail'
                                        placeholder='name@example.com'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <label htmlFor='floatingEmail'>Email address</label>
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
                                    <div className="form-floating mb-3">
                                        <input type="password" 
                                        className="form-control rounded-3" 
                                        id="floatingConfirmPassword" 
                                        placeholder="Confirm-Password"
                                        value={confirmPassword}
                                        onChange={(e)=>setConfirmPassword(e.target.value)}
                                        ></input>
                                        <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                                    </div>
                                    <button
                                    className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                                    type="submit"
                                    >Signup
                                    </button>
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

export default Signup;