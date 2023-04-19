import {React,useState} from 'react'
import './Login.css'
const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [dataInput,setDataInput]=useState([])
  const handleChange=(e)=>{
    const {name,value}=e.target 
    if(name==='email'){
      setEmail(value)
    
    }
    if(name==='password'){
     setPassword(value)
   
    }
  }
  const submitThis=(e)=>{
    e.preventDefault()
    const info={"email":email,"password":password}
    setDataInput([info])
    fetch('http://localhost:3001/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(info)
    })
    .then(res=>res.json())
    .then(data=>{
      //HANDLE RESPONSE FROM SERVER
      console.log(data)
    }).catch(err=>{
      console.log(err)
    }
    )
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