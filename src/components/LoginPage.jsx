 import React from 'react';

function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
 <header className="App-header">

        <p>
          Welcome to jeetcode
        </p>
        <form>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </header>
    </div>
  );
}

export default LoginPage; 