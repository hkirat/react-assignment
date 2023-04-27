import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Solution from './Solution'

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    console.log(username, password)
  }

  return (
    
    <div className='h-full'>   
      <div class="flex flex-col align-middle w-full max-w-xs mx-auto mt-20">
        <h1 className='text-4xl text-center font-bold p-4'>Signup</h1>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username:
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="username" 
              type="text" 
              onChange={(e) => {setUsername(e.target.value)}}
              placeholder="Username"
            /> 
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input 
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              id="password" 
              type="password" 
              onChange={(e) => {setPassword(e.target.value)}}
              placeholder="******************"
            />
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>
              Sign up
            </button>
            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
          <div class="flex items-center justify-center p-3">
              <Link to="/" class="border border-black rounded py-1 px-3 hover:bg-black hover:text-white" >back</Link>
            </div>
        </form>
        
      </div>
    </div>
  )
}

export default Login