import React from "react";
function Signup(){
    return(
    <div className="container">
      <form className="form">
        <h2>Leetcode Signup</h2>
        <input className="input" type="email" placeholder="Email" required />
        <input
          className="input"
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit">Signup</button>
      </form>
    </div>
    )
}
export default Signup;