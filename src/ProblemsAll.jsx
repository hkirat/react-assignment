import React from "react";

function ProblemsAll(props) {
  return (
    <tr
      className={
        props.index % 2 === 0 ? "bg-gray-900 problem" : "bg-gray-800 problem"
      }
    >
      <td className="">{props.title}</td>
      <td
        className={
          props.difficulty === "Easy"
            ? "text-green-600"
            : props.difficulty === "Medium"
            ? "text-yellow-600"
            : "text-red-600"
        }
      >
        {props.difficulty}
      </td>
      <td className="">{props.acceptance}</td>
    </tr>
  );
}

export default ProblemsAll;
