import React from "react";

function Signup(){
    return <>
        
        <input type="email" name="email" placeholder="Enter email" required/>
        <input type="password" name="password" placeholder="Enter password" required/>
        <input type="Repassword" name="Repassword" placeholder="Renter password" required/>
        <button>Signup</button>
    </>
}

export default Signup;