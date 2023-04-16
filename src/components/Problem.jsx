import React from "react";
import { Link } from "react-router-dom";

const Problem = () => {
  const problems = [
    {
      id: 1,
      title: "201. Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "42%",
    },
    {
      id: 2,
      title: "201. Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "412%",
    },
    {
      id: 3,
      title: "202. Happy Number",
      difficulty: "Easy",
      acceptance: "54.9%",
    },
    {
      id: 4,
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%",
    },
  ];

  return (
    <div className="problem-page">
      <div className="problems_all">
        {problems.map((p) => (
          <div key={p.id}>
            <div>
              <div>{p.title}</div>
              <div>{p.difficulty}</div>
              <div>{p.acceptance}</div>
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Problem;
