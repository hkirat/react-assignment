import React from 'react';
import './signin.css'
import logo from '../../assets/leetcode_logo.svg'
const SignIn = () => {


    return (
        <div className="signin-container">
            <div className="logo"><img src={logo} alt="logo" /></div>
            <form className="form-signin">


                <input type="email" id="inputEmail" placeholder="Email address" required autoFocus />

                <input type="password" id="inputPassword" className="" placeholder="Password" required />
                <button id="btn-signin" type="submit">Sign in</button>
            </form>

        </div>
    );
};

export default SignIn;
