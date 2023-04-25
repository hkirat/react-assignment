import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    
      <div className='text-4xl capitalize font-bold text-center pt-10'>
        Signup
        <div className='pt-4'>
          <div className='p-4'>
            <input className='text-xl border rounded border-black p-2' type='text' placeholder='Username' />
          </div>
          <div className='p-4'>
            <input className='text-xl border rounded border-black p-2' type='text' placeholder='Password' />
          </div>
          <div className='p-4'>
            <button className='text-xl border rounded border-black p-2 hover:bg-black hover:text-white'>Signup</button>
          </div>
        </div>
        
        <div className='text-xl p-4'>
          <Link className='p-4' to='/'>back</Link>
        </div>
      </div>
  )
}

export default Login