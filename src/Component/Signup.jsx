import React from "react";
const Signup = () => {
  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="FirstName" name="FirstName" />
        <input type="text" placeholder="LastName" name="Lastname" />
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
