import React, {useState} from "react"
import LoginLogo from "../assets/loginLogo.png"
import "./Login.css"
import {Link} from "react-router-dom"

function Login() {
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")

  return (
    <div className="login-container">
      <div className="login-card">
        <img className="login-logo" src={LoginLogo} alt="Logo" />
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
          Sign in
        </button>

        <div className="login-options">
          <a id="option-one" className="login-link" href="">
            Forgot Password?
          </a>
          <Link id="option-two" className="login-link" to="/signup">
            <>Signup</>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
