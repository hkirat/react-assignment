import { Link } from "react-router-dom";

function Login() {

  const handleLogin = (e) => {
    e.preventDefault();

    const data = e.target.querySelectorAll("input");
    
    console.log("Email :", data[0].value);
    console.log("Password :", data[1].value);
  }

  return (
    <section>
      <div className="login">
        <h1>Login</h1>

        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Enter email" />
          <input type="password" placeholder="Enter password" />
          <button type="submit">Login</button>
        </form>

        <p>Don't have account? <Link to="/signup"><span>Sign up</span></Link></p>
      </div>
    </section>
  );
}

export default Login;
