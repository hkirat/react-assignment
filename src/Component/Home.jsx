import React from "react";

import "./Home.css";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <div>
        {/* Content for the Home page */}
        <h1>Welcome to LeetCode</h1>
      </div>
    </div>
  );
}
