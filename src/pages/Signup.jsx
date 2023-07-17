import { Link } from "react-router-dom";

function Signup() {

  const signup = async (email, password) => {
    try{
      const response = await fetch("http://127.0.0.1:3001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password})
      })
  
      const data = await response.json();
      alert(data.message);
    } catch (err){
      console.log("Error :\n", err);
    }
  }

  const handleSignup = (e) => {
    e.preventDefault();

    const data = e.target.querySelectorAll("input");
    
    if (data[1].value !== data[2].value){
      alert("Confirm password didn't match!")
    } else {
     signup(data[0].value, data[1].value);
    }
    console.log("Email :", data[0].value);
    console.log("Password :", data[1].value);
    console.log("Confirm Password :", data[2].value);
  }

  return (
    <section>
      <div className="signup">
        <h1>Signup</h1>

        <form onSubmit={handleSignup}>
          <input type="email" placeholder="Enter email" required/>
          <input type="password" placeholder="Enter password" required/>
          <input type="password" placeholder="Confirm password" required/>
          <button type="submit">Signup</button>
        </form>

        <p>Already have account? <Link to="/login"><span>Login</span></Link></p>
      </div>
    </section>
  );}

export default Signup;
