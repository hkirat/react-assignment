import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isWrong, setIsWrong] = useState(false);
  const navigate = useNavigate();
  const { onLogin, problemId, setUserId } = props;

  const handleLogin = async () => {
    // Implement authentication logic here
    console.log('Email:', email);
    console.log('Password:', password);

    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      // Successful login
      const json = await response.json();
      const token = json.token;
      const userId = json.userId;
      onLogin(token);
      const url = `/problem/:${problemId}`;
      if (problemId) {
        setUserId(userId);
        navigate(url);
      } else {
        navigate('/problems'); // Redirect to /problems if problemId is not available
      }
    } else {
      // Error occurred
      const json = await response.json(); // Get the error message as text
      const errorResponse = json.message;
      setErrorMessage(errorResponse); // Set the error message state
      setIsWrong(true);
    }
  };

  return (
    <>
      {isWrong ? (
        <h3>{errorMessage}</h3>
      ) : (
        <div className="login-container">
          <h2>Login</h2>
          <form>
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
              onClick={handleLogin}
              className="btn btn-primary"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
