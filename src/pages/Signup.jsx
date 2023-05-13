import React, { useState } from "react";
import "./login.css";

function Signup(){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>LeetCode</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Username or E-mail" id="email" name="email" />
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Retype Password" id="password" name="password" />
                <input type="submit" value="Signup" />
            </form>
        </div>
    )
}

export default Signup;
