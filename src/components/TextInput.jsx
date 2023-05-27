import React from "react";

const TextInput = ({ placeholder, onChange, type = "text" }) => {
  return (
    <input
      className="p-3 outline outline-1 hover:outline-2 focus:outline-2 rounded-sm outline-slate-300 hover:outline-slate-400 focus:outline-slate-500"
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default TextInput;
