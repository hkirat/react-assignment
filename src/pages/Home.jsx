import React from 'react'
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div className='flex justify-center text-4xl capitalize font-bold pt-10'>
      <div>
        <Link className='p-4' to='/login'>Login</Link>
      </div>
      <div>
        <Link className='p-4' to='/signup'>Signup</Link>
      </div>
      <div>
        <Link className='p-4' to='/problems'>Problems</Link>
      </div>
      
    </div>
  )
}
