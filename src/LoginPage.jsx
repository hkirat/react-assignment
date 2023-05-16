import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProblemList from './Problems';


const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Perform login logic here

    // Redirect to the /problems route
    navigate('/problemset/all/');

  };

  return (
    <div>
      <h1>Sign In</h1>

      <div>
        <label htmlFor="Username or E-mail">Email:</label>
        <input type="email" id="email" name="email" /><br />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>

      <button onClick={handleSubmit}  style={{ backgroundColor: '#808080', color: 'white' }}>Submit</button>
    </div>
  );
};

export default LoginPage;
