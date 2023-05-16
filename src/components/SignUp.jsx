import React, { useState } from 'react'
import { Navigate, redirect, useNavigate } from 'react-router-dom'
import { Users } from '../Users'

export const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate= useNavigate()

  const isPreExistingUser = (newUserData) => {
    const res =  Users.find((user) => {
      return user.email === newUserData.email
    })

    return res;
  }

  const processSignUp = (event) => {
    event.preventDefault()

    let data = {}
    const inputs = Array.from(event.target);
    inputs.forEach(input => {
      const a = {}
      data[input.id] = input.value
    });

    if(!isPreExistingUser(data)) {
      Users.push(data)
      localStorage.setItem("isAuthnDone","testAuthnToken")
      navigate("/problemset/all")
    } else {
      setErrorMessage("User Already Exists")
    }
  }
  return (
    <div class="form-container">
      {errorMessage && <div class="error-message">{errorMessage}</div>}
      <form onSubmit={processSignUp}>
        <label class="form-label" htmlFor="firstName">First Name</label><br/>
        <input class="form-field" type="text" id='firstName' required="true"/><br/>
        <label class="form-label" htmlFor="lastName">Last Name</label><br/>
        <input class="form-field" type="text" id='lastName' required="true"/><br/>
        <label class="form-label" htmlFor="email" >Email</label><br/>
        <input class="form-field" type="text" id='email' required="true"/><br/>
        <label class="form-label" htmlFor="password">Password</label><br/>
        <input class="form-field" type="text" id='password' required="true"/><br/>
        <input class="button" type="submit" value="Submit"/>
      </form>
    </div>
  )
}
