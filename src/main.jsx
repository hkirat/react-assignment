import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Navigate,Route,Routes,Link,Outlet,useParams, NavLink, useNavigate, useLocation} from 'react-router-dom';
import App from './App'
import LoginPage from "./Login"
import Problem from './Problem';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to="/login/"/>} />
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/problems" element={<App/>}/>
      <Route path="/problems/:particular" element={<Problem/>}/>
    </Routes>
      
    </BrowserRouter>
    
  </React.StrictMode>,
)
