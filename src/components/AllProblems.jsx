import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const AllProblems = (props) => {
  const questions = props.props
  const [problems, setProblems] = useState(questions)
  console.log(problems)
  
  return (
    <>
    
      <Navbar/>
    <div className='w-full h-screen flex flex-col items-center pt-7'>
      
      {problems?.map( item =>(
      <div className='w-3/4 h-16 border-t border-b border-x-2  flex justify-between items-center'>
        <div className='w-5 mx-2'>{item.index}</div>
        <Link to={`/problems/${item.index}`} className='w-2/5 pl-5'>{item.title}</Link>
        <div className='w-1/12'>{item.acceptance}</div>
        <div className='w-1/12'>{item.difficulty}</div>
      </div>))}
      
    </div>
    
    </>
  )
}

export default AllProblems