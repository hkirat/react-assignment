import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-tr from-slate-900 to-slate-500 hover:bg-gradient-to-bl text-white font-bold py-2 px-4 rounded"
    >
      {text}
    </button>
  );
};

export default Button;
