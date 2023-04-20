import {React,useContext,useState} from 'react'
import './Login.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import LOGIN_API_URL from '../config.js';
import AuthContext from './AuthContext.js'

const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  
  const navigate=useNavigate()
  const {setAuthState}=useContext(AuthContext)

  const handleChange=(e)=>{
    const {name,value}=e.target 
    if(name==='email'){
      setEmail(value)
    
    }
    if(name==='password'){
     setPassword(value)
   
    }
  }
  const submitThis=async(e)=>{
    e.preventDefault()
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }
try{
const response =await axios.post('http://localhost:3001/login',{
  email:email,
  password:password
})
if(response.status===200){
  console.log('login success')
  setAuthState({
    isLoggedIn:true,
    token:response.data.token,
  
  })
  console.log((AuthContext.isLoggedIn)?'not logged in':'logged in')
  navigate('/')
 
}else{
  console.error('error')
  alert('login failed')

}

}
catch(error){
  console.error('login failed',error)
  alert('login failed')
}setEmail('');
setPassword('');

  }
  return (
    <>
    <div className="container">
    <h1>Login</h1>
   <form action="" onSubmit={submitThis} method='post'>
    <div>
      <label htmlFor="email">Email</label>
      <input type="text" name='email' id='email' value={email} onChange={handleChange}/>
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input type="password" name='password' id='password' value={password} onChange={handleChange} />
    </div>
    <button type='submit'>Login</button>
   </form>
    </div>
    </>
  )
}

export default Login