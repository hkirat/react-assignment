import React from "react";

function SignUp() {
  <>
    <h1>Login Page</h1>
    <form>
      <P>
        <label>Username:</label>
        <input type="text" className="username" />
      </P>
      <p>
        <label>Password:</label>
        <input type="password" className="password" />
      </p>
      <button>Login</button>
    </form>
  </>;
}

export default SignUp;
