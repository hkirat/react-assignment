import React, { useState } from "react";
import axios from 'axios';
import { BACKEND_URL } from '../../constants';
import Wrapper from "../../components/Wrapper/Wrapper";
import styles from './styles.module.css'

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
      // <div className='login-form'>
      //   <div className='name'>
      //     <label>Name</label>
      //     <input type="name" id='name' onChange={(e) => {
      //       setName(e.target.value);
      //     }} />
      //   </div>
      //   <div className='email'>
      //     <label>Email</label>
      //     <input type="email" id='email' onChange={(e) => {
      //       setEmail(e.target.value);
      //     }} />
      //   </div>
      //   <div className='email'>
      //     <label>Password</label>
      //     <input type="password" id='password' onChange={(e) => {
      //       setPassword(e.target.value);
      //     }} />
      //   </div>

      //   <button type="submit" onClick={handleSubmit}>Sign Up</button>
      // </div>
      <div className={styles.loginForm}>
        <div className={styles.email}>
           <label>Name</label>
           <input type="name" id='name' onChange={(e) => {
             setName(e.target.value);
           }} />
        </div>
        <div className={styles.email}>
          <label>Email</label>
          <input type="email" id='email' onChange={(e) => {
            setEmail(e.target.value);
          }}/>
        </div>
        <div className={styles.password}>
          <label>Password</label>
          <input type="password" id='password' onChange={(e) => {
            setPassword(e.target.value);
          }}/>
        </div>
        <div className={styles.submit}>
          <button className={styles.submitBtn} type="submit" onClick={handleSubmit}>Login</button>
        </div>
      </div>
    );
  };

  return (
    <div className="page-content">
      <div className={styles.loginPage}>
          <div className={styles.loginBg}>
            <div className={styles.loginCard}>
              <img className={styles.webLogo} src="/logo/coding.png" alt="Logo" />
              <h1>Sign Up to Why2Code?</h1>
              <SignupForm />
            </div>
          </div>
        </div>
    </div>

  )
}

export default Wrapper(SignupPage);

