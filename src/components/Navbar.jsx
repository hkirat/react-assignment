import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate()

  return (
    <nav className="bg-gray-900 text-gray-200 p-3 sticky top-0 shadow-md flex flex-wrap md:flex-nowrap justify-between items-center">
    <div className="text-white text-2xl font-bold flex-shrink-0">LeetCode App</div>
    <div className="flex-shrink-0">
      {localStorage.getItem('token') && <button
      onClick={() => {localStorage.removeItem('token'); navigate('/login')}}
        className="bg-gray-200 text-gray-900 hover:bg-gray-300 text-sm font-medium py-2 px-4 rounded focus:outline-none"
      >
        Logout
      </button>}
    </div>
  </nav>
  )
}

export default Navbar