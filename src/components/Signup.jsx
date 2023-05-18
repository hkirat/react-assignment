import React from 'react'
import '../styles/Auth.css'
import leetcode from "../assets/leetcode.png"
import { Link } from 'react-router-dom'


function Signup() {
  return (
    <div className='signup'>
      <div className="details">
        <img className='log-logo' src={leetcode} />
        <div className='heading'>LeetCode</div>
        <input className='inp' type="text" placeholder='Username' />
        <input className='inp' type="text" placeholder='Password' />
        <input className='inp' type="text" placeholder='Confirm Password' />
        <input className='inp' type="text" placeholder='E-mail address' />
        <button className='submit'>Sign In</button>
        <div className='redirect'>Have an account? <Link className="item" to='/login'>Sign In</Link> </div>
      </div>
    </div>
  )
}

export default Signup