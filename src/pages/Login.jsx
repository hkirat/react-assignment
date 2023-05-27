import React from "react";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { SiLeetcode } from "react-icons/si";
const Login = () => {
  return (
    <div className="flex-grow flex items-center justify-center">
      <form className="p-8 rounded-xl w-[30rem] bg-white flex flex-col gap-6">
        <div className="text-slate-800 flex flex-col justify-center items-center gap-1">
          <SiLeetcode className="text-5xl" />
          <h1 className="font-mono text-2xl">Neetcode</h1>
        </div>
        <TextInput placeholder={"Username"} />
        <TextInput placeholder={"Password"} type="password" />
        <Button text={"Log In"} />
        <div className="flex justify-center text-sm gap-2">
          <p className="text-slate-500">Don't have an account?</p>
          <Link className="text-slate-800 font-bold" to="/signup">
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
