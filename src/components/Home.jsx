import React from "react";
import Topbar from "./Topbar";
import Problems from "./Problems";
import "../App.css";

export default function Home() {
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

  return (
    <>
      <Topbar />
      <div className="Home">
        {problemss.map((problem) => (
          <Problems
            title={problem.title}
            acceptance={problem.acceptance}
            difficulty={problem.difficulty}
          />
        ))}
      </div>
    </>
  );
}
