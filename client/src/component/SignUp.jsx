import React from 'react';

const Signup = () => {
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" />
        </div>
        <button>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
