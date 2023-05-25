import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 px-6 flex justify-between items-center">
      <h2 className="text-2xl text-red-400">
        Leet
        <span className="text-gray-100"> Code</span>
      </h2>
      <div className="text-red-500 text-lg font-semibold flex items-center space-x-4">
        <button
          onClick={() => navigate("/login")}
          className="hover:text-gray-100 hover:bg-red-500 bg-gray-100 px-2 rounded-md"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="hover:text-gray-100 hover:bg-red-500 bg-gray-100 px-2 rounded-md"
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Header;
