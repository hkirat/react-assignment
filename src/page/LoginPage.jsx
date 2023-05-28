import React, {useState} from "react";
import axios from 'axios';
import {BACKEND_URL} from '../constants';

const LoginPage = () => {
  const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
      const body = {
        email, password
      }
      const resp = await axios.post(`${BACKEND_URL}login`, body);
      localStorage.setItem("token", resp.data.token);
    };
    return (
      <div className='login-form'>
        <div className='email'>
          <label>Email</label>
          <input type="email" id='email' onChange={(e) => {
            setEmail(e.target.value);
          }}/>
        </div>
        <div  className='email'>
          <label>Password</label>
          <input type="password" id='password' onChange={(e) => {
            setPassword(e.target.value);
          }}/>
        </div>
        
        <button type="submit" onClick={handleSubmit}>Login</button>
      </div>
    );
  };

  return (
    <div className="login-page">
      <h1>Sign in To Leetcode</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
