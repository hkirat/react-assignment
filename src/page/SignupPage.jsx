import React, {useState} from "react";
import axios from 'axios';
import {BACKEND_URL} from '../constants';
const SignupPage = () => {
    const SignupForm = () => {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const handleSubmit = async (e) => {
        const body = {
          name, email, password
        };
        const resp = await axios.post(`${BACKEND_URL}signup`, body);
        console.log(resp, body);
        
      };
      return (
        <div className='login-form'>
          <div className='name'>
            <label>Name</label>
            <input type="name" id='name' onChange={(e) => {
              setName(e.target.value);
            }}/>
          </div>
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
          
          <button type="submit" onClick={handleSubmit}>Sign Up</button>
        </div>
      );
    };

    return (
        <div  className="login-page">
            <h1>SignupPage</h1>
            <SignupForm/>
        </div>
    )
}

export default SignupPage;

