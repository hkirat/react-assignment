import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassord] = useState();
  const [message, setMessage] = useState();

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setMessage("All fields are required");

      return;
    }

    if (password !== confirmPassword) {
      setMessage("Password do not match");

      return;
    }
    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        }),
      });
      // localStorage.setItem("email", email);
      // localStorage.setItem("password", password);
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message || "Signup Successful");
        console.log(data);
        navigate("/login");
      } else {
        setMessage(data.message || "Signup Failed");
      }
    } catch (error) {
      setMessage("Error");
      console.error("Error : ", error);
    }
  };

  return (
    <div className="flex flex-col m-auto items-center justify-center h-screen">
      {/* <Navbar /> */}
      <div className="border-[0.5px] w-fit px-6 py-6 rounded-sm shadow-md">
        <div className="flex flex-col justify-center items-center">
          <img src={Logo} alt="NeetCode logo" />
          <p>NeetCode</p>
        </div>
        <div>
          {message && <p className="text-red-500 text-sm pt-6">{message}</p>}
        </div>
        <div className="">
          <form
            // onSubmit={handleSignup}
            action="sumbit"
            className="flex flex-col gap-6"
          >
            <div className="px-4 py-2 border-[0.5px] pr-24 rounded-sm">
              <input
                type="text"
                placeholder="Email"
                required
                className=" outline-none text-sm text-left"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="px-4 py-2 border-[0.5px] pr-24 rounded-sm">
              <input
                type="password"
                placeholder="Password"
                required
                className="outline-none text-sm text-left"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="px-4 py-2 border-[0.5px] pr-24 rounded-sm">
              <input
                type="password"
                placeholder="Confirm Password"
                required
                className="outline-none text-sm text-left"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassord(e.target.value);
                }}
              />
            </div>
          </form>
        </div>
        <div className="pt-12">
          <button
            onClick={handleSignup}
            type="submit"
            className="flex justify-center border py-2 rounded-sm bg-[#4E5E71] w-full"
          >
            <p className="text-white text-sm">Sign Up</p>
          </button>
        </div>
        <div className="flex flex-row justify-center text-sm pt-4 gap-2">
          <p className="text-[#828282]">Have an Account?</p>
          <Link to="/" className="text-[#4E5E71]">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
