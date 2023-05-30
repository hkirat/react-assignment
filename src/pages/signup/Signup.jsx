import { backendURL } from "../../constants/constants.js";
import { useState } from "react";
import UserForm from "../../components/userform/UserForm.jsx";
import "./Signup.css";

export default function Signup() {
  const [message, setMessage] = useState("");

  async function handleSignup(username, password) {
    const response = await fetch(
      `${backendURL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });
    const json = await response.json();
    setMessage(() => json.message);
  }

  return (
    <>
      <div className="center">
        <UserForm type="signup" onClick={handleSignup} />
      </div>
      <p className="flash-message">
        {message}
      </p>
    </>
  )
}
