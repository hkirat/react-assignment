import { useState } from "react";

function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function onSignup() {
        console.log(`Username: ${username}`);
        console.log(`Password: ${password}`);
        console.log("Signup successfull");
    }

    return (
        <>
        <div style={{margin: "10px"}}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div style={{margin: "10px"}}>
        <label htmlFor="password">Password</label>
        <input type="text"id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div style={{margin: "10px"}}>
        <button type="button" onClick={onSignup} >Signup</button>
        </div>    
        </>
    )
}

export default Signup;