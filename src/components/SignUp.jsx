import React, {useState} from "react"
import "./SignUp.css"
import LoginLogo from "../assets/loginLogo.png"

function SignUp() {
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [username, setUserName] = useState("")

  return (
    <div className="login-container">
      <div className="login-card">
        <img className="login-logo" src={LoginLogo} alt="Logo" />
        <input
          className="input-field"
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className="input-field"
          type="email"
          placeholder="Username or E-mail"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <input
          className="input-field"
          type="password"
          placeholder="Password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <button className="login-submit" type="submit">
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default SignUp
