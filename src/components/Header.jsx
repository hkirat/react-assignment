import React from 'react'
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <>
      <nav>
        <ul className='ul1'>
          <li><Link className='link' to={"/"} >Home</Link></li>
          <li><Link className='link' to={"/problemset/all/"} >Problemsets</Link></li>
        </ul>

        <ul className='ul2'>
          <li><Link className='link' to={"/login"} >Login</Link></li>
          <li><Link className='link' to={"/Signup"} >Signup</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default header