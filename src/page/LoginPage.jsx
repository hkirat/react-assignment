import React from 'react';
// import './styles.scss';
const LoginPage = () => {
  const LoginForm = () => {
    return (
      <form class='login-form'>
        <div class='email'>
          <label for ='email'>Email</label>
          <input type="email" id='email' placeholder="Email" />
        </div>
        <div  class='email'>
          <label for ='password'>Password</label>
          <input type="password" id='password' placeholder="Password" />
        </div>
        
        <button type="submit">Login</button>
      </form>
    );
  };

  return (
    <div className="login-page">
      <h1>Sign in To Leetcode</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
