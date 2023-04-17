import React from 'react'

export default function Signup() {
  return (
    <div className='signup'>
        <form action="" className="signupform">
            <input type="text" className="signinInput" placeholder='Name' />
            <input type="email" className="signinInput" placeholder='email'/>
            <input type="password" className="signinInput" placeholder='password'/>
            <input type="password" className="signinInput" placeholder='confirm password'/>
            <button className="signupButton">Signup</button>
        </form>
    </div>
  )
}
