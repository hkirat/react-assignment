import React from 'react'
import {  BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Navbar from './components/Navbar';
import './styles/App.css'
import Signup from './components/Signup';
import Login from './components/Login';
import ProblemDetail from './components/ProblemDetail';
import Problems from './components/problems';


function App() {

    return (
    <div className='main'>
        <div className="nav">
            <Navbar />
        </div>
        {/* <hr /> */}
        <div className='display'>
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/signup' element={<Signup />}/>
                <Route path='/problemset/all' element={<Problems />}/>
                <Route path='/problems/:id' element={<ProblemDetail />}/>
            </Routes>
        </div>
    </div>
  )
}

export default App;

