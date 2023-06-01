import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here, e.g., sending a request to an API
    console.log("Signup:", email, password);
  };
  const navigate = useNavigate();
  return (
    <div id="signup">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type="submit">Signup</button>
        <div>
          <h5>Already a member?</h5>
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
