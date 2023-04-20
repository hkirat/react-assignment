import React from "react";
import "./../../index.css" ;
import Navbar from "../navbar/Navbar";

const Signup = () => {
return (
	<>
	<Navbar/>
	<div className="signup">
	<span id="signupelement">email </span><input  placeholder="email"/> <br/> <br/>
	<span id="signupelement">password</span> <input placeholder="password"/> <br/>
	<br/>
	<button id="signupbutton"type="submit">Signup</button> 
	</div>
	</>
)

}

export default Signup 
