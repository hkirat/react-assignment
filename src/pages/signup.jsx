import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isWrong, setIsWrong] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    // Implement user registration logic here
    console.log('User Name:', userName);
    console.log('Email:', email);
    console.log('Password:', password);

    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName,
        email,
        password,
      }),
    });

    if (response.ok) {
      const json = await response.json();
      console.log(json);
      navigate('/signupsuccess');
    } else {
      const json = await response.json();
      const errorResponse = json.message;
      setErrorMessage(errorResponse);
      setIsWrong(true);
    }
  };

  return (
    <>
      {isWrong ? (
        <h1>{errorMessage}</h1>
      ) : (
        <div className="signup-container">
          <h2>Sign Up</h2>
          <form>
            <div className="form-group">
              <label>User Name:</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={handleSignup}
              className="btn btn-primary"
            >
              Sign Up
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Signup;
