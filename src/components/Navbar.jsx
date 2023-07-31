import '../app.css'
import logo from '../assets/leetcode.png'
// import Auth from './Auth'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Navbar = () => {


return (
  <nav className="font-sans flex items-center background-color: #302c2c justify-between py-4 px-6 absolute top-0 left-0 right-0">

    <div className="flex flex-row c">
      <img src={logo} alt="Logo" className="h-8 w-8 mr-3" />
      <span className="text-white font-helvicta text-lg mt-1 mr-10">LeetCode</span>
    </div>

    <div className="flex items-center mr-auto">
      <Link to={'/problems'} className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded mr-2'>
        Problems
      </Link>

      <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded mr-2">
        Explore
      </button>

      <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded mr-2">
        Contest
      </button>
    </div>
    
    <div>
      <Link to={'/login'}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2">
        Login
      </Link>

      <Link to={'/signup'} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
        Signup
      </Link>
    </div>
  </nav>
  )
}

export default Navbar
