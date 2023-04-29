import React from 'react'
const signup = () => {
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
    <div>
        <div className="form">
        <h1>Welcome to Singup page</h1>
          <label htmlFor="FirstName">FirstName</label>

          <input type="text" id='firstName' />


          <label htmlFor="FirstName">lastName</label>
          <input type="text" id='lastName' />

          <label htmlFor="password">password</label>
          <input type="text" id='password' />
          
          <label htmlFor="confirm password">confirm password</label>
          <input type="text" id='confirm password' />

    <button>Sign Up</button>
        </div>
    </div>

</div>
  )
}

export default signup;
