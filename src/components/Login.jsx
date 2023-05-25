import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <div style={{ textAlign: 'center'}}>
      <h2 style={{ marginBottom: '20px' }}>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: '10px', marginBottom: '10px', width: '200px' }}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: '10px', marginBottom: '10px', width: '200px' }}
      />
      <br />
      <button
        onClick={handleLogin}
        style={{
          padding: '10px 20px',
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
