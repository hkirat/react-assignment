import React from 'react';
import './signup.css'
import logo from '../../assets/leetcode_logo.svg'
const SignUp = () => {


    return (
        <div className="signup-container">
            <div className="logo"><img src={logo} alt="logo" /></div>
            <form className="form-signup">


                <input type="email" id="inputEmail" placeholder="Email address" required autoFocus />

                <input type="password" id="inputPassword" placeholder="Password" required />
                {/* <input type="password" id="inputPassword" placeholder=" Confirm Password" required /> */}

                <button id="btn-signup" type="submit">Sign up</button>
            </form>

        </div>
    );
};

export default SignUp;