import React, { useState } from 'react';

const Login = () => {

  return (
    <div>
      <h1>Login</h1>
      <form >
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
