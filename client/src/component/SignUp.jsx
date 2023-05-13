import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [email,setEmail]=useState('');
  const [password,setpassword]=useState('');

  const addUser=(email,password)=>{
    axios.post(`http://127.0.0.1:5000/user/register`,{email,password})
      .then((resp)=>console.log(resp))
      .catch((err)=>console.log(err))
  }

  return (
    <div>
      <h1>Signup</h1>
     
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" onChange={(e)=>setpassword(e.target.value)}/>
        </div>
        <button onClick={()=>addUser(email,password)}>Signup</button>
     
    </div>
  );
};

export default Signup;
