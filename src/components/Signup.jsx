import React from 'react'
import logo from '../assets/leetcode.png'

const Login = () => {
  return (
    <div className=''>
      <div className='flex flex-col mt-20 py-20 max-w-[500px] w-full mx-auto items-center justify-center bg-white p-6 rounded-lg  '>
        <form className=''>
          <div>
            <img className='h-24 mx-auto' src={logo} alt="img" />
          </div>
          <div>
            <h3 className='text-xl mt-4'>Register here</h3>
          </div>
          <div className=''>
            <input type="text" className='w-96 border border-black rounded-sm mt-6 p-3  focus:border-orange-500 focus:outline'
              placeholder='Email' />
          </div>
          <div>
          <input type="Password" className='w-96 border border-black rounded-sm mt-6 p-3 focus:border-orange-500 focus:outline'
              placeholder='Password' />
          </div>
          <div>
          <input type="Password" className='w-96 border border-black rounded-sm mt-6 p-3 focus:border-orange-500 focus:outline'
              placeholder='Confirm Password' />
          </div>
          <div>
            <button className='mt-6 p-3 w-96 rounded font-thin bg-gradient-to-r from-gray-700 to-gray-600 text-white shadow-md hover:bg-gray-500'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login