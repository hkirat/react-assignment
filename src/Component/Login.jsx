import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // sconsole.log(formData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setLoginData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
    // setIsLoggedIn(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (loginData.email === "" && loginData.password === "") {
      alert("All fields are mandatory");
      return;
    }
    props.getLoginDetails(loginData);

    setLoginData({
      email: "",
      password: "",
    });

    navigate("/problems");
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={loginData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={loginData.password}
          onChange={handleInputChange}
        />
        <button type="submit">Login</button>
      </form>
      <h4>
        Dont have an account ?{" "}
        <button>
          <Link to="/signup">SignUp</Link>
        </button>
      </h4>
    </div>
  );
};

export default Login;
