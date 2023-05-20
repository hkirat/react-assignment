import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './containers/HomePage';
import Layout from './Layout/Layout';
import Login from './containers/Auth/Login';
import Pagenotfound from './containers/Pagenotfound';
import Register from './containers/Auth/Register';

const App = () => {
    return (
        <>

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='*' element={<Pagenotfound />} />
            </Routes>


        </>
    )
}

export default App
