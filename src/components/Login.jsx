import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
function Login() {
  return (
    <div className="login">
    <div className="login-card">
        <div className="login-card-top">
            <img className="leetcode-img" alt="leetcode" src="https://leetcode.com/static/images/LeetCode_logo.png"/>
            <h2 className="leetcode">Leetcode</h2>
        </div>
        <form className="login-card-form">
        <input type="text" placeholder="Username or Email" className="input-form" name="username" id="username"/>
        <input type="password" placeholder="Password" className="input-form" name="password" id="password"/>
        <button className="form-btn">Sign in</button>
        </form>
        <div className="login-card-bottom">
            <div className="login-card-bottom-top">
                <p className="login-bottom-btns">Forgot Password?</p>
                <Link className="login-bottom-btns" id="sign-up" to="/signup">Sign up</Link>
            </div>
            <p className="policy-terms">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
        </div>
    </div>
    </div>
  )
}

export default Login