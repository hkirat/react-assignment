import React, { useState } from 'react'
import backgroundImage from '../assets/bg.jpg';
import {useAuth} from './auth'
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [email,setEmail] = useState();
  const auth = useAuth();
  const navigate = useNavigate();
  const handlelogin = () => {
    auth.login(email)
    navigate('/')
  }
  return (
    <div className='bg-cover bg-no-repeat bg-center flex justify-center items-center h-screen' style={{backgroundImage: `url(${backgroundImage})`}}>
    <div className="bg-gradient-to-br from-black to-gray-900 shadow-md rounded-xl  w-full h-full sm:w-1/2 sm:h-3/4  md:w-3/4 lg:w-2/4 flex flex-row " >
      <div className="ml-8 mr-8 mt-10 w-full ">
      <h2 className="text-white text-2xl font-bold mb-4">Welcome Back.</h2>
      <p className="text-gray-100 text-base mb-4">Dont have an account?<span className="text-blue-600 cursor-pointer">register</span></p>
      <div>

  <input value={email} onChange={(e) =>{setEmail(e.target.value)} } type="email" name="email" placeholder='Email' className="text-white bg-transparent border border-gray-400 py-2 px-3 mb-3 leading-tight focus:outline-none focus:border-blue-500 rounded w-full" />
</div>

<div>
  <input id="password" type="password" name="password" placeholder="Password" className="text-white bg-transparent border border-gray-400 py-2 px-3 mb-3 leading-tight focus:outline-none focus:border-blue-500 rounded w-full" />
</div>

      <button onClick={handlelogin} className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Login</button>
      </div>
     <div style={{backgroundImage: `url(https://img2.wallspic.com/originals/9/2/9/2/4/142929-line-purple-art-sky-abstractart-1920x1080.jpg)`}} className="hidden md:flex lg:flex bg-cover bg-no-repeat bg-center w-3/4 rounded-xl justify-center ">
        <h1 className='text-white font-bold text-4xl mt-10'>
            Code Everyday.
        </h1>
        </div>
    </div>
    </div>
  )
}
