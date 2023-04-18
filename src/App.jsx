import React from "react";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Problems from "./Component/Problems";
import Signup from "./Component/Signup";
import ProblemDetails from "./Component/ProblemDetails";
import { useState } from "react";

import { Routes, Route } from "react-router-dom";

export default function App() {
  const [problems, setProblems] = useState([
    {
      id: 1,
      title: "Two Sum",
      acceptanceRate: "57.1%",
      difficulty: "Easy",
      problemStatement:
        "Given an array of integers, find two numbers such that they add up to a specific target number.",
      input: "nums = [2, 7, 11, 15], target = 9",
      output: "[0, 1]",
      explanation:
        "In the given array, the numbers 2 and 7 add up to the target number 9. Hence, the output is [0, 1] representing the indices of the two numbers in the array.",
    },
    {
      id: 2,
      title: "Reverse Integer",
      acceptanceRate: "33.6%",
      difficulty: "Easy",
      problemStatement:
        "Given a 32-bit signed integer, reverse the digits of the integer.",
      input: "x = 123",
      output: "321",
      explanation:
        "The given integer 123 is reversed to 321 by reversing its digits.",
    },
    {
      id: 3,
      title: "Longest Common Prefix",
      acceptanceRate: "31.5%",
      difficulty: "Hard",
      problemStatement:
        "Write a function that takes an array of strings and returns the longest common prefix of the strings.",
      input: 'strs = ["flower", "flow", "flight"]',
      output: '"fl"',
      explanation:
        'The longest common prefix of the given array of strings "flower", "flow", and "flight" is "fl".',
    },
    {
      id: 4,
      title: "Valid Parentheses",
      acceptanceRate: "41.5%",
      difficulty: "Hard",
      problemStatement:
        "Given a string containing only characters '(', ')', '{', '}', '[', ']', determine if the input string is valid.",
      input: '"({[]})"',
      output: "true",
      explanation:
        "The given string '({[]})' is a valid parentheses string as all the opening and closing parentheses are properly matched and nested.",
    },
    {
      id: 5,
      title: "Maximum Subarray",
      acceptanceRate: "30.6%",
      difficulty: "Hard",
      problemStatement:
        "Given an array of integers, find the contiguous subarray with the largest sum.",
      input: "nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]",
      output: "6",
      explanation:
        "The contiguous subarray with the largest sum in the given array is [4, -1, 2, 1], which sums up to 6.",
    },
  ]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/problems"
          element={<Problems problems={problems} />}
        ></Route>
        <Route
          path="/problem/:problemId"
          element={<ProblemDetails problems={problems} />}
        ></Route>
      </Routes>
    </div>
  );
}
