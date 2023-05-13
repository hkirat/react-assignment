import React from 'react'
import { useContext } from 'react'
import { Problumset } from './context'
import { Link } from 'react-router-dom'
const login = () => {
  const {data} = useContext(Problumset)
  console.log(data)
  return (
    <div className='login-box' >
      <div className="login">
        <h1>Login</h1>
        <input type="email" placeholder='Enter email' />
        <input type="password" placeholder='Enter Password' />
        <button className='login-btn' >Login</button>
        <p>Don't Have an account <Link to={'/singup'} >Sing up </Link> now </p>
      </div>

    
    </div>
  )
}

export default login
