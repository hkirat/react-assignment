import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Thanks for visiting us</h1>
      <div className="btn-container">
        <button onClick={handleLogout}>Go back to Home</button>
      </div>
    </div>
  );
}
