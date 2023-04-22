import { useState } from 'react';
import './Signup.scss';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSignup = () => {
    // Here you can add your signup logic, for example, sending a request to your server to create a new user account
    console.log(`Signing up with username: ${username}, email: ${email}`);
  };

  return (
    <div className="signup-container">
      <div>
        <a href="/">Home</a>
      </div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} required />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupPage;
