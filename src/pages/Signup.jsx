import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const navigate=useNavigate()
  const [password, setPassword] = useState("");
  const location=useLocation();
  

  const sumbitData = async () => {
    const { data } = await axios.post(import.meta.env.VITE_BACKEND+'/signup', {
      email,
      password,
    });

    return data;



  };

  useEffect(()=>{
   if(localStorage.getItem("token")){
     navigate("/problemset/all")
   }                            
  },[location.pathname])

  const userMutate = useMutation({
    mutationFn: sumbitData,
    onSuccess: (data) => {
      toast("Successfully signed up!");
      localStorage.setItem("token", data.token);
      navigate("/problemset/all")
      
    },
    onError: (error) => {
        console.log(error);
        }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    userMutate.mutate();
  };
  return (
    <div className="h-screen w-full  px-5 flex items-center justify-center mx-auto     ">
      <div className="w-full md:w-2/5">
        <img
          src="https://leetcode.com/static/images/LeetCode_logo_rvs.png"
          alt="logo"
          className="w-10 h-10 my-5  mx-auto "
        />
        <form
          onSubmit={handleSubmit}
          className="shadow-md ring-yellow-200 rounded-md ring-2 p-6 "
        >
          <div className="mb-4">
            <label
              className="block  text-sm md:text-xl font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block  text-sm md:text-xl font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Account
          </button>
        </form>
        <div className="text-white text-sm text-center p-5 hover:underline decoration-white underline-offset-2">
        <Link to="/login">Already a user? Go to login page!</Link>
        
        </div>
      </div>
      <Toaster position="top-center"/>
    </div>
  );
};

export default Signup;
