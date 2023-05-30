import { backendURL } from "../../constants/constants.js";
import { useState } from "react";
import UserForm from "../../components/userform/UserForm.jsx";
import "./Login.css";

export default function Login() {
  const [message, setMessage] = useState("");

  async function handleLogin(username, password) {
    const response = await fetch(
      `${backendURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username, 
        password: password
      })
    })
    const json = await response.json();
    localStorage.setItem("token", json.token);
    setMessage(() => json.message);
  }

  return (
    <>
      <div className="center">
        <UserForm type="login" onClick={handleLogin} />
      </div>
      <p className="flash-message">
        {message}
      </p>
    </>
  )
}
