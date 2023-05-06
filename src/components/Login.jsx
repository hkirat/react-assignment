import React, { useState } from 'react'
import { Users } from '../Users'
import { useNavigate } from 'react-router-dom'


export const Login = () => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState(null)

  const validateCredentials = (credentials) => {
    return Users.find((user) => {
      return user.email === credentials.email && user.password === credentials.password
    })
  }

  const processLogin = (event) => {
    
    event.preventDefault()
    const data = {}
    Array.from(event.target).forEach(input => {
      const a = {}
      data[input.id] = input.value
    });

    if(validateCredentials(data)) {
      localStorage.setItem("isAuthnDone","testAuthnToken")
      navigate("/problemset/all")
    } else {
      setErrorMessage("Invalid Credentials")
    }

  }
  return (
    <div class="form-container">
      {errorMessage && <div class="error-message">{errorMessage}</div>}
      <form  onSubmit={processLogin}>
        <label class="form-label" htmlFor="email" >Email</label><br/>
        <input class="form-field" type="text" id='email' required="true"/><br/>
        <label class="form-label" htmlFor="password">Password</label><br/>
        <input class="form-field" type="text" id='password' required="true"/><br/>
        <input class="button" type="submit" value="Submit"/>
      </form>
    </div>
  )
}
