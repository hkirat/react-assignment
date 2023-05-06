import React from "react";

function Login(){
    return <>
        
        <input type="email" name="email" placeholder="Enter email" required/>
        <input type="password" name="password" placeholder="Enter password" required/>
        <button>Login</button>
    </>
}

export default Login;