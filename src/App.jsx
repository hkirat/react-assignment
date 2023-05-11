import React from 'react'
import { Route ,Routes } from "react-router-dom"
import Login from './components/Login'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import Problem from './components/Problem'
import { AuthProvider } from './components/auth'
import RequireAuth from './components/RequireAuth'
 function App() {

  return (
    <AuthProvider>
    <Routes>
        <Route path='/' element={<RequireAuth><NavBar/></RequireAuth>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/problem/:title' element={<Problem/>}/>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<register />} />
    </Routes>
    </AuthProvider>
  )
}

export default App
