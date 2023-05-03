import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"

const HomePage = () => {

  const navigate= useNavigate();

  return (
    <div className='homepage'>
      <div className='homepage_header'>
        <h1 className=''>Problems Page</h1>
      </div>

      <div className='homepage_toProblems'>
        <button 
        onClick={() => navigate('/problems/1')}
        >
          Click here for problems
        </button>
      </div>
    </div>
  )
}

export default HomePage