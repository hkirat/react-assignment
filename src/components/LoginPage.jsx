import React from "react";
import "../assets/Login.css"
function LoginForm() {
  return (
    <div className="vid-container">
 
  <div className="inner-container">
   
    <div className="box">
{/* <img src="jeet.png"></img> */}
      <h1>Jeetcode</h1>
      <input type="text" placeholder="Username"/>
      <input type="text" placeholder="Password"/>
      <button className="login--btn">Login</button>
      <p>Not a member? <span>Sign Up</span></p>
    </div>
  </div>
</div>
  );
}

function LoginPage() {
  return (
<>
  
    <div className="container" >
      <h1>Login</h1>
        <LoginForm />
     
    </div>
</>
  );
}

export default LoginPage
