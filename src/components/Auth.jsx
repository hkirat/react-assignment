
import React, { useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    const user = registeredUsers.find((user) => user.email === email && user.password === password);
    if (user) {
      setLoggedIn(true);
      setEmail('');
      setPassword('');
    } else {
      alert('Invalid email or password');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic here
    const user = registeredUsers.find((user) => user.email === email);
    if (user) {
      alert('Email already registered');
    } else {
      const newUser = {
        email,
        password,
      };
      setRegisteredUsers([...registeredUsers, newUser]);
      setLoggedIn(true);
      setEmail('');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  if (loggedIn) {
    return (
      <div>
        <h2>Welcome, User!</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Login or Signup</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignup}>Signup</button>
      </form>
    </div>
  );
};

export default Auth;