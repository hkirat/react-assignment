import "../css/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <Link to="/signup">Sign Up</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
