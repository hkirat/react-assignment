import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import SignUp from './pages/SignUp'
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    </BrowserRouter>
)
