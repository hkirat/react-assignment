import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const loginUser=async(email,password)=>{
    const response = await axios.post(`http://127.0.0.1:5000/user/login`,{email,password})
    console.log(response)
    localStorage.setItem('token',response.data.token)
  }


  return (
    <div>
      <h1>Login</h1>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button onClick={()=>loginUser(email,password)}>Login</button>
    </div>
  );
};

export default Login;
