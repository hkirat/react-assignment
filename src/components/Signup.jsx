import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

function Signup() {
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
        <input type="password" placeholder="Confirm Password" className="input-form" name="confirm-password" id="confirm-password"/>
        <input type="email" placeholder="Email" className="input-form" name="email" id="email"/>
        <button className="form-btn">Sign in</button>
        </form>
        <div className="login-card-bottom">
            <div className="signup-card-bottom-top">
                <p id="signup" className="signup-bottom-btns">Have an account?</p>
                <Link id="sign-up" className="signup-bottom-btns" to="/login">Sign in</Link>
            </div>
            <p className="policy-terms">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
        </div>
    </div>
    </div>
  )
}

export default Signup