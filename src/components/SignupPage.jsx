import { Link } from "react-router-dom";

const SignupPage=()=>{
    return(
        <div className="box-container">
        <div className="login-form">
          <h2 className="login-title">LeetCode</h2>
          <form action="/all-problems">
            <input type="text" placeholder="Username" className="login-input" />
            <input type="password" placeholder="Password" className="login-input" />
            <input type="password" placeholder="Confirm Password" className="login-input" />
            <input type="text" placeholder="Email" className="login-input" />
            <button type="submit" className="login-button">Signup</button>
          </form>
          <p className="forgot-password">Forgot Password?</p>
          <div className="signup-link">
            <span className="signup-text">Already have an account?</span>
            <Link to={"/login"}><p className="signup-anchor">Log in</p></Link>
          </div>
        </div>
      </div>
    )
}
export default SignupPage;