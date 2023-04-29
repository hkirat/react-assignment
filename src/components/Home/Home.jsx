import React from 'react'
import {BsChevronRight} from "react-icons/bs"
import './Home.css'
import { useNavigate } from 'react-router'

function Home() {

    const navigate = useNavigate()
  return (
    <div className='container'>
        <div className="nav">
            <h1>LeetCode</h1>
            <button className='nav-btn' onClick={()=>{navigate("/login")}}>SignIn</button>
        </div>

        <div className="home-body">
            <img style={{marginLeft:"40px",mixBlendMode:"color-burn"}} src="https://tse3.mm.bing.net/th?id=OIP.DrQ9r0UM3pZwCrGXo-8d6QHaEI&pid=Api&P=0" alt="" />
            <div className='des'>
                <h1>A New Way to Learn</h1>
                <p style={{marginTop:"20px"}}>LeetCode is the best platform to help you enhance your skills, expand 
                    <br/> your knowledge and prepare for technical interviews.</p>

                <button className='create-acc' onClick={()=>{navigate("/signup")}}>create account < BsChevronRight /></button>
            </div>
        </div>
    </div>
  )
}

export default Home