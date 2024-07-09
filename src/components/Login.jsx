import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { json, Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassord] = useState();
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    localStorage.setItem("token", data.token);
    if (response.ok) {
      setMessage("Login Successful");
      console.log(data);
      navigate("/");
    } else {
      setMessage(data.error || "Login Failed");
    }
  };
  return (
    <div className="flex flex-col m-auto items-center justify-center h-screen">
      <div className="border-[0.5px] w-fit px-6 py-6 rounded-sm shadow-md">
        <div className="flex flex-col justify-center items-center">
          <img src={Logo} alt="NeetCode logo" />
          <p>NeetCode</p>
        </div>
        <div className="pt-6">
          <div>{message && <p>{message}</p>}</div>
          <form action="sumbit" className="flex flex-col gap-6">
            <div className="px-4 py-2 border-[0.5px] pr-24 rounded-sm">
              <input
                type="text"
                placeholder="Email"
                required
                className=" outline-none text-sm text-left"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="px-4 py-2 border-[0.5px] pr-24 rounded-sm">
              <input
                type="password"
                placeholder="Password"
                required
                className="outline-none text-sm text-left"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="pt-12">
          <button
            className="flex justify-center border py-2 rounded-sm bg-[#4E5E71] w-full"
            onClick={handleLogin}
          >
            <p className="text-white text-sm">Sign In</p>
          </button>
        </div>
        <div className="flex flex-row justify-between text-sm pt-4">
          <p className="text-[#828282]">Forget Password?</p>
          <Link className="text-[#4E5E71]" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
