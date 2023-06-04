import React, { useState } from "react";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id="login">
      <h2>Login</h2>
      <div id="form">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          onClick={async (e) => {
            const responce = await fetch("http://localhost:3000/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: email,
                password: password,
              }),
            });
            const json = await responce.json();
            localStorage.setItem("token", json.token);
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
