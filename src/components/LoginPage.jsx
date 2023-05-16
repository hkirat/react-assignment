import { Link } from "react-router-dom";

const LoginPage=()=>{
    return(
        <div className="box-container">
        <div className="login-form">
          <h2 className="login-title">LeetCode</h2>
          <form>
            <input type="text" placeholder="Username or Email" className="login-input" />
            <input type="password" placeholder="Password" className="login-input" />
            <button type="submit" className="login-button">Log In</button>
          </form>
          <p className="forgot-password">Forgot Password?</p>
          <div className="signup-link">
            <span className="signup-text">Don't have an account?</span>
            <Link to={"/signup"}><p className="signup-anchor">Sign Up</p></Link>
          </div>
        </div>
      </div>
    )
}
export default LoginPage;