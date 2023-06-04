import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  return (
    <div id="signup">
      <h2>Signup</h2>
      <div id="form">
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          onClick={async (e) => {
            const response = await fetch("http://localhost:3000/signup", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: name,
                email: email,
                password: password,
              }),
            });
            const json = await response.json();
            navigate("/login");
          }}
        >
          Signup
        </button>
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
      </div>
    </div>
  );
}

export default SignUp;
