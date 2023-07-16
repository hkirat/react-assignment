import { Link } from "react-router-dom";

function Signup() {

  const handleSignup = (e) => {
    e.preventDefault();

    const data = e.target.querySelectorAll("input");
    
    console.log("Email :", data[0].value);
    console.log("Password :", data[1].value);
    console.log("Confirm Password :", data[2].value);
  }

  return (
    <section>
      <div className="signup">
        <h1>Signup</h1>

        <form onSubmit={handleSignup}>
          <input type="email" placeholder="Enter email" />
          <input type="password" placeholder="Enter password" />
          <input type="password" placeholder="Confirm password" />
          <button type="submit">Signup</button>
        </form>

        <p>Already have account? <Link to="/login"><span>Login</span></Link></p>
      </div>
    </section>
  );}

export default Signup;
