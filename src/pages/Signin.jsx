import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = async () => {
    const data = {
      email: email,
      password: password,
    };

    const info = await fetch("http://localhost:3001/user/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const details = await info.json();
    if (info.status === 200) {
      toast.success(details.msg);
      navigate("/problems/all");
    } else {
      toast.error(details.err);
    }
  };
  return (
    <div className="w-screen items-center flex fixed inset-0 justify-center">
      <div className="flex  justify-around text-center mx-auto  flex-col  h-[60vh] max-sm:mx-2 max-sm:w-[100%] sm:w-1/3 px-4 py-3 bg-gray-800 rounded-md shadow">
        <h1 className="text-3xl mb-4 font-bold text-center">SignIn</h1>
        <div className="flex flex-col gap-3 ">
          <input
            type="text"
            name="email"
            className="px-3 py-1.5 rounded-md mb-3 text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
          <input
            type="password"
            name="password"
            className="px-3 py-1.5 rounded-md mb-3 text-black"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-3 py-1.5 rounded-md mb-3 bg-white text-black hover:bg-gray-700 hover:text-white"
            onClick={handleSignIn}
          >
            signin
          </button>
        </div>
        <div className="">
          Don't have account ?
          <span className="text-blue-700 text-md">
            <Link to="/signup"> SignUp</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signin;
