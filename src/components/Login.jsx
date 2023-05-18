import React from 'react'
import '../styles/Auth.css'
import leetcode from "../assets/leetcode.png"
import { Link } from 'react-router-dom'



function Login() {
  return (
    <div className='login'>
      <div className="details">
        <img className='log-logo' src={leetcode} />
        <div className='heading'>LeetCode</div>
        <input className='inp' type="text" placeholder='Username or E-mail' />
        <input className='inp' type="text" placeholder='Password' />
        <button className='submit'>Sign In</button>
        <div className='redirect'>Not registered? <Link className="item" to='/signup'>Sign Up</Link> </div>
      </div>
    </div>
  )
}

export default Login