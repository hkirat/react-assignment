import React from "react";
import "../App.css";
import "./ComponentsStyles/Home.css";

export default function Home() {
  return (
    <>
      <h1 className="DogeCode-title">DogeCode🐶</h1>
      <h2 className="DogeCode-subtitle">A place for doge lovers to code</h2>

      <div className="DogeCode-buttons">
        <a href="/login" className="DogeCode-button">
          Login
        </a>
        <a href="/signup" className="DogeCode-button">
          Signup
        </a>
      </div>
    </>
  );
}
