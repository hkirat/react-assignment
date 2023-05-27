import React from "react";

function Login() {
  return (
    <div className="text-gray-500 flex justify-center items-center">
      <div className="bg-gray-800 h-max m-3 rounded-lg w-96 p-10 flex flex-col items-center justify-center gap-8">
        <h1 className="text-5xl">👨‍💻 </h1>
        <h1 className="text-xl ">
          Login to <span className="text-indigo-200">MeetCode</span>
        </h1>
        <input
          type="text"
          placeholder="Enter Your Email"
          className="p-2 rounded-md min-w-full"
        />
        <input
          type="text"
          placeholder="Enter Your Password"
          className="p-2 rounded-md min-w-full"
        />
        <button className="bg-indigo-600 p-2 min-w-full rounded-md text-gray-100">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
