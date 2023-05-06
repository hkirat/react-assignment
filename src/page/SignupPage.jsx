import React from "react";

const SignupPage = () => {
    const SignupForm = () => {
        return (
          <form class='login-form'>
            <div class='name'>
              <label for ='name'>Email</label>
              <input type="name" id='name' placeholder="Name" />
            </div>
            <div class='email'>
              <label for ='email'>Email</label>
              <input type="email" id='email' placeholder="Email" />
            </div>
            <div  class='email'>
              <label for ='password'>Password</label>
              <input type="password" id='password' placeholder="Password" />
            </div>
            
            <button type="submit">Sign Up</button>
          </form>
        );
      };

    return (
        <div>
            <h1>SignupPage</h1>
            <SignupForm/>
        </div>
        
    )
}

export default SignupPage;

