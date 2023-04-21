import React from "react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

const Signup = (props) => {
  const navigate = useNavigate();

  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setSignUpData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.values(signUpData).some((value) => value === "")) {
      alert("All fields are mandatory");
      return;
    }
    props.getSignUpDetails(signUpData);

    setSignUpData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });

    navigate("/problems");
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="FirstName"
          name="firstName"
          value={signUpData.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="LastName"
          name="lastName"
          value={signUpData.lastName}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={signUpData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={signUpData.password}
          onChange={handleInputChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
