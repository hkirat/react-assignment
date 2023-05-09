import React from "react";
import "./../../index.css" ;
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  function handleSubmit(e){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "" || password === "") {
        
        alert("Fields are Required");
        return;

    } else {
        // window.location.replace("./upload.html");
        navigate("/login");
        
    }
  };

  return (
    <>
    <Navbar/>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
    <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-800">
    Sign in to your account
    </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="" method="POST">
    <div>
    <label
    htmlFor="email"
    className="block text-sm font-medium leading-6 text-gray-700"
    >
    email address
    </label>
    <div className="mt-2">
    <input
    placeholder="johndoe@email.com"
    id="email"
    name="email"
    type="email"
    autoComplete="email"
    required
    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
    </div>
    </div>

    <div>
    <div className="flex items-center justify-between">
    <label
    htmlFor="password"
    className="block text-sm font-medium leading-6 text-gray-700"
    >
    password
    </label>
    <div className="text-sm">
    <a
    href="#"
    className="font-semibold text-blue-500 "
    >
    forgot password?
    </a>
    </div>
    </div>
    <div className="mt-2">
    <input
    id="password"
    placeholder="password"
    type="password"
    required
    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />

    <div className="font-semibold text-blue-500 ">
    <Link to='/login'>
    Already member?
    </Link>
    </div>
    </div>
    </div>

    <div>
    <button
    type="submit"
    className="flex w-full justify-center rounded-md bg-slate-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    onClick={handleSubmit}
    >
    sign in
    </button>
    </div>
    </form>


    </div>
    </div>
    </>
  )

}

export default Signup 
