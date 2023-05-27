import { useState } from "react";
import { Link } from "react-router-dom";



export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Signup form submitted');
      console.log('Email:', email);
      console.log('Password:', password);
    };
  
    return (
      <div>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <br />
          <button type="submit">Signup</button>
        </form>
      <Link to={`/`}>home</Link>
      </div>
    );
  }