import React, { useState } from "react";
// import {Facebook,GitHub,Google} from '@mui/icons-material'
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

async function loginUser(credentials) {
  fetch("http://localhost:9090/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(credentials),
  })
    .then((data) => {
      debugger;
      return data.json();
    })
    .catch((err) => console.log(err));
}

const Login = () => {
  const [isLogin, setIsLogin] = useState();
  const [servermsg, setServermsg] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  //const [registerAvatar,setRegisterAvatar] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const token = await loginUser({
    //   loginEmail,
    //   loginPassword,
    // });
    // debugger;
    // if (token) setToken(token);
    const response = await fetch(`http://localhost:9090/login`, {
      method: "POST",
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword,
      }),
    });
    debugger;
    const json = await response.json();
    if (json) {
      if (json.msg) {
        setServermsg(json.msg);
      }
      if (json.token) {
        localStorage.setItem("token", json.token);
        //setToken(json.token);
        navigate("/");
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <div className="w-full sm:max-w-md p-5 mx-auto">
        <h2 className="mb-12 text-center text-5xl font-extrabold">Welcome.</h2>
        <p>{servermsg}</p>
        <form onSubmit={handleSubmit}>
          <h3 className="text-xl font-semibold  pt-2">Sign In!</h3>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">
              Email-Address
            </label>
            <input
              id="email"
              type="text"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition"
            >
              Sign In
            </button>
          </div>
          <div className="mt-6 text-center">
            <Link to={"/signup"}>Sign up for an account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };

export default Login;
