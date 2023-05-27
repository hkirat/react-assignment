import React from "react";

const Tag = ({ difficulty }) => {
  const color =
    difficulty === "Easy"
      ? "text-green-500"
      : difficulty === "Medium"
      ? "text-yellow-500"
      : "text-red-500";
  return (
    <span className={`text-sm p-2 ${color}`}>
      {difficulty}
    </span>
  );
};

export default Tag;
