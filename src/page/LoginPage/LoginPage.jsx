import React, {useState} from "react";
import axios from 'axios';
import {BACKEND_URL} from '../../constants';
import Wrapper from "../../components/Wrapper/Wrapper";
import styles from './styles.module.css';
import { Link } from "react-router-dom";

const LoginPage = () => {
  const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = async (e) => {
      const body = {
        email, password
      }
      const resp = await axios.post(`${BACKEND_URL}login`, body);
      if (resp.status === 200) {
        window.location.href = `/problemset/all`;
      } else {
        setMessage('Invalid Credentials');
      }
      localStorage.setItem("token", resp.data.token);
    };
    return (
      <div className={styles.loginForm}>
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
          <div className={styles.loginText}>Don't have an account? <Link to='/signup'>Sign Up</Link></div>
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
              <h1>Sign In to Why2Code?</h1>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Wrapper(LoginPage);
