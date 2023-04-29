import React from 'react'

const Login = () => {
  return (
    <div>
        <nav>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/login">login</a>
            </li>
            <li>
                <a href="/signup">signup</a>
            </li>
            <li>
                <a href="/problems/all">All problems</a>
            </li>
            <li>
                    <a href="/problems/id/:id">Problem</a>
                </li>
        </ul>
    </nav>

      <div className="form">
      <h1>login here</h1>
        <label htmlFor="">Email</label>
        <input type="email" />
        <label htmlFor="">password</label>
        <input type="email" />
      <button>Login</button>
      </div>
    </div>
  )
}

export default Login;
