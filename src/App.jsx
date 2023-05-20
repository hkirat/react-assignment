import React from 'react';
import Navbar from './components/navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Problemset from './components/problemstatement';
import ProblemWithID from './components/problems';

function App() {
    return(
    <BrowserRouter> 
        <Routes>
            <Route >
                <Route path='/'  element ={'home'}/>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='problemset/all' element={<Problemset />} />
                <Route path='problems/:id' element={<ProblemWithID />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
