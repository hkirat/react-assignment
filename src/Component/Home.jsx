import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <div>
        {/* Content for the Home page */}
        <h1>Welcome to LeetCode</h1>
        <p>Join the community of developers and sharpen your coding skills.</p>
      </div>
    </div>
  );
}
