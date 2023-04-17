import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Problems(props) {
  const navigate = useNavigate();
  const handelClick = () => {
    navigate("/problems");
  };
  const problemss = [
    {
      title: "201. Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "42%",
    },
    {
      title: "201. Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "412%",
    },
    {
      title: "202. Happy Number",
      difficulty: "Easy",
      acceptance: "54.9%",
    },
    {
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%",
    },
  ];

  const title = props.title;
  const acceptance = props.acceptance;
  const difficulty = props.difficulty;

  return (
    <div className="problems">
      <tr className="tabel">
        <td className="title" id="table" onClick={handelClick}>
          {title}
        </td>
        <td className="accept" id="table">
          {acceptance}
        </td>
        <td className="difficulty" id="table">
          {difficulty}
        </td>
      </tr>
    </div>
  );
}

export default Problems;
