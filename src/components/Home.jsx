import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    
    <div class="form-container">
        <h1>Welcome to My Leetcode Clone</h1>
        <div>
            <Link to="/login">
                <button class = "button" >Login</button>
            </Link>
            <Link to="/signup">
                <button class = "button" >Signup</button>
            </Link>
        </div>
    </div>
  )
}
