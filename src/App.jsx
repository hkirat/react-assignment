import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/login';
import Singup from './pages/signup';
import AllProblems from './pages/AllProblems';
import Problem from './pages/Problem';
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/signup' element={<Singup/>} />
    <Route path='/login' element={<Login/>}/>
    <Route path='/problems/all' element={<AllProblems/>} />
    <Route path='problems/id/:id' element={<Problem/>} />
   </Routes> 
   </BrowserRouter>
  )
}

export default App;
