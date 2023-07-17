import { Link } from "react-router-dom";

function Login() {

  async function login(email, password){
    try {
      const response = await fetch("http://127.0.0.1:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
      })

      const json = await response.json();
      localStorage.setItem("token", json.token);
      alert(json.message)
      
    } catch (err){
      console.log("Error :\n", err);
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();

    const data = e.target.querySelectorAll("input");
    
    login(data[0].value, data[1].value);

    console.log("Email :", data[0].value);
    console.log("Password :", data[1].value);
  }

  return (
    <section>
      <div className="login">
        <h1>Login</h1>

        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Enter email" required/>
          <input type="password" placeholder="Enter password" required/>
          <button type="submit">Login</button>
        </form>

        <p>Don't have account? <Link to="/signup"><span>Sign up</span></Link></p>
      </div>
    </section>
  );
}

export default Login;
