import React,{useEffect,useContext} from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext.js';
const Root = () => {
  const navigate = useNavigate();

//we will set the token in local storage

const{isLoggedIn,setAuthState}=useContext(AuthContext)
//we will check if the user is logged in or not
useEffect(()=>{
  if(!isLoggedIn){ 
    navigate('/login')
  }
},[isLoggedIn,navigate])

const handleLogout=()=>{
  //make api call to backend here
  //update auth state
  setAuthState({
    isLoggedIn:false,
    token:null

  })
  console.log('logout')
  navigate('/login')
}

 
    
    return isLoggedIn ? (
    <div>
      <div>Welcome to the home page!</div>

    </div>
  ) : null;
  
}

export default Root