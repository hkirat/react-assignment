import React from "react"
import "./Navigation.css"
import Leetcode from "../assets/Leetcode.png"
import {Link} from "react-router-dom"

function Navigation() {
  return (
    <div className="nav-container">
      <img className="nav-logo" src={Leetcode} alt="Logo" />
      <div className="nav-inner-container">
        <div className="item">Explore</div>

        <Link id="nav-link" to="/problems">
          <div className="item">Problems</div>
        </Link>

        <div className="item">Interview</div>
        <div className="item">Contest</div>
        <div className="item">Discuss</div>

        <Link id="nav-link" to="/login">
          <div className="item">Login</div>
        </Link>
      </div>
    </div>
  )
}

export default Navigation
