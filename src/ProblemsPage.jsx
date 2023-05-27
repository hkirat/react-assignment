import React from "react";
import ProblemsAll from "./ProblemsAll";

const problems = [
  {
    title: "Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%",
  },
  {
    title: "Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "41%",
  },
  {
    title: "Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%",
  },
  {
    title: "Remove Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%",
  },
  {
    title: "Palindrome Number",
    difficulty: "Easy",
    acceptance: "56%",
  },
  {
    title: "Two Sum",
    difficulty: "Easy",
    acceptance: "75%",
  },
  {
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    acceptance: "34%",
  },
  {
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    acceptance: "68%",
  },
  {
    title: "Search in Rotated Sorted Array",
    difficulty: "Hard",
    acceptance: "33%",
  },
  {
    title: "Reverse Integer",
    difficulty: "Easy",
    acceptance: "47%",
  },
];

function ProblemsPage() {
  return (
    <div className="text-gray-300 flex-col m-4 p-4 bg-gray-900 rounded-lg">
      <h1 className="text-3xl mb-5">🧮 All Problems</h1>
      <h1 className="text-xl mb-5 text-gray-600">
        Check out all these problems
      </h1>
      <table className="w-full">
        <thead className="border-y border-indigo-800">
          <tr>
            <th>Title</th>
            <th>Difficulty</th>
            <th>Acceptance</th>
          </tr>
        </thead>

        <tbody>
          {problems.map((items, index) => {
            return (
              <ProblemsAll
                index={index}
                title={items.title}
                difficulty={items.difficulty}
                acceptance={items.acceptance}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProblemsPage;
