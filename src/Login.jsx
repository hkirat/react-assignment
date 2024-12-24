import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    function handleChange(e){
        setUsername(e.target.value);
    }

    function handleClick(){
        console.log("Username:" + username);
        console.log("Password:" + password);
        console.log("Login successfull");
        navigate("/problemset/all");
    }

    return (
        <>
            <div style={{margin: "10px"}}>
            <label htmlFor="username">Enter user name:</label>
            <input type="text" id="username" value={username} onChange={handleChange} />
            </div>
            <div style={{margin: "10px"}}>
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div style={{margin: "10px"}}>
            <input type="button" value="Login" onClick={handleClick} />
            </div>
        </>
    )
}

export default Login;