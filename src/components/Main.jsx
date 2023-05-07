import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./styles/Main.css"
import Problemset from './Problemset';
const Main =()=>{
    return (
        <>
        <div className="main-container">
        <h1 className="title">LEARN CODE</h1>
        <h2 className="subtitle">A random version of Leetcode</h2>
  
        <div className="D-buttons">
          <a href="/login" className="D-button">
            Login
          </a>
          <a href="/signup" className="D-button">
            Signup
          </a>
        </div>
        <div className="problems">
            <Problemset/>
        </div>
        </div>
        
      </>

    )
}

export default Main;