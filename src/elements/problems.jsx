import { useState } from "react";
import { Link } from "react-router-dom";
import "./problems.css";

const problems1 = [
  {
    title: "9. Palindrome Number",
    difficulty: "Easy",
    acceptance: "53.8%",
    discription:
      "Given an integer x, return true if x is a palindrome, and false otherwise.",
    exampleInput: {
      input: "x = 121",
      output: "true",
    },
  },
  {
    title: "1396. Design Underground System",
    difficulty: "Medium",
    acceptance: "74.5%",
    discription:
      "An underground railway system is keeping track of customer travel times between different stations. They are using this data to calculate the average time it takes to travel from one station to another.      ",
    exampleInput: {
      input:
        '["UndergroundSystem","checkIn","checkIn","checkIn","checkOut","checkOut","checkOut","getAverageTime","getAverageTime","checkIn","getAverageTime","checkOut","getAverageTime"][[],[45,"Leyton",3],[32,"Paradise",8],[27,"Leyton",10],[45,"Waterloo",15],[27,"Waterloo",20],[32,"Cambridge",22],["Paradise","Cambridge"],["Leyton","Waterloo"],[10,"Leyton",24],["Leyton","Waterloo"],[10,"Waterloo",38],["Leyton","Waterloo"]]',
      output:
        "[null,null,null,null,null,null,null,14.00000,11.00000,null,11.00000,null,12.00000]",
    },
  },
  {
    title: "2. Add Two Numbers",
    difficulty: "Medium",
    acceptance: "40.6%",
    discription:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.You may assume the two numbers do not contain any leading zero, except the number 0 itself.",
    exampleInput: {
      input: "l1 = [2,4,3], l2 = [5,6,4]",
      output: "[7,0,8]",
    },
  },
  {
    title: "4. Median of Two Sorted Arrays",
    difficulty: "Hard",
    acceptance: "36.5%",
    discription:
      "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.The overall run time complexity should be O(log (m+n)).",
    exampleInput: {
      input: "nums1 = [1,3], nums2 = [2]",
      output: "2.00000",
    },
  },
];
const problems2 = [
  {
    title: "10. Palindrome Number",
    difficulty: "Medium",
    acceptance: "53.8%",
    discription:
      "Given an integer x, return true if x is a palindrome, and false otherwise.",
    exampleInput: {
      input: "x = 121",
      output: "true",
    },
  },
  {
    title: "96. Design Underground System",
    difficulty: "Hard",
    acceptance: "7.5%",
    discription:
      "An underground railway system is keeping track of customer travel times between different stations. They are using this data to calculate the average time it takes to travel from one station to another.      ",
    exampleInput: {
      input:
        '["UndergroundSystem","checkIn","checkIn","checkIn","checkOut","checkOut","checkOut","getAverageTime","getAverageTime","checkIn","getAverageTime","checkOut","getAverageTime"][[],[45,"Leyton",3],[32,"Paradise",8],[27,"Leyton",10],[45,"Waterloo",15],[27,"Waterloo",20],[32,"Cambridge",22],["Paradise","Cambridge"],["Leyton","Waterloo"],[10,"Leyton",24],["Leyton","Waterloo"],[10,"Waterloo",38],["Leyton","Waterloo"]]',
      output:
        "[null,null,null,null,null,null,null,14.00000,11.00000,null,11.00000,null,12.00000]",
    },
  },
  {
    title: "1. Add Two Numbers",
    difficulty: "Easy",
    acceptance: "90.6%",
    discription:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.You may assume the two numbers do not contain any leading zero, except the number 0 itself.",
    exampleInput: {
      input: "l1 = [2,4,3], l2 = [5,6,4]",
      output: "[7,0,8]",
    },
  },
  {
    title: "4. Median of Two Sorted Arrays",
    difficulty: "Hard",
    acceptance: "36.5%",
    discription:
      "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.The overall run time complexity should be O(log (m+n)).",
    exampleInput: {
      input: "nums1 = [1,3], nums2 = [2]",
      output: "2.00000",
    },
  },
];

function Problems() {
  const [problems, setProblems] = useState([
    {
      title: "9. Palindrome Number",
      difficulty: "Easy",
      acceptance: "53.8%",
      discription:
        "Given an integer x, return true if x is a palindrome, and false otherwise.",
      exampleInput: {
        input: "x = 121",
        output: "true",
      },
    },
    {
      title: "1396. Design Underground System",
      difficulty: "Medium",
      acceptance: "74.5%",
      discription:
        "An underground railway system is keeping track of customer travel times between different stations. They are using this data to calculate the average time it takes to travel from one station to another.      ",
      exampleInput: {
        input:
          '["UndergroundSystem","checkIn","checkIn","checkIn","checkOut","checkOut","checkOut","getAverageTime","getAverageTime","checkIn","getAverageTime","checkOut","getAverageTime"][[],[45,"Leyton",3],[32,"Paradise",8],[27,"Leyton",10],[45,"Waterloo",15],[27,"Waterloo",20],[32,"Cambridge",22],["Paradise","Cambridge"],["Leyton","Waterloo"],[10,"Leyton",24],["Leyton","Waterloo"],[10,"Waterloo",38],["Leyton","Waterloo"]]',
        output:
          "[null,null,null,null,null,null,null,14.00000,11.00000,null,11.00000,null,12.00000]",
      },
    },
    {
      title: "2. Add Two Numbers",
      difficulty: "Medium",
      acceptance: "40.6%",
      discription:
        "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.You may assume the two numbers do not contain any leading zero, except the number 0 itself.",
      exampleInput: {
        input: "l1 = [2,4,3], l2 = [5,6,4]",
        output: "[7,0,8]",
      },
    },
    {
      title: "4. Median of Two Sorted Arrays",
      difficulty: "Hard",
      acceptance: "36.5%",
      discription:
        "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.The overall run time complexity should be O(log (m+n)).",
      exampleInput: {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.00000",
      },
    },
  ]);
  return (
    <>
      <div id="problems-table">
        <table>
          <thead>
            <tr>
              <th>SI/No</th>
              <th>Title</th>
              <th>Acceptance</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem, index) => (
              <ProblemStatement
                key={index}
                ind={index + 1}
                title={problem.title}
                difficulty={problem.difficulty}
                acceptance={problem.acceptance}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div id="page-buttons">
        <button
          className="page"
          onClick={() => {
            setProblems((problems) => problems1);
          }}
        >
          1
        </button>
        <button
          className="page"
          onClick={() => {
            setProblems((problems) => problems2);
          }}
        >
          2
        </button>
      </div>
    </>
  );
}

function ProblemStatement(props) {
  const index = props.ind;
  const title = props.title;
  const acceptance = props.acceptance;
  const difficulty = props.difficulty;

  return (
    <tr>
      <td>{index}</td>
      <td>
        {" "}
        <Link to={`/problems/${title}`}>{title}</Link>
      </td>

      <td className={difficulty}>{acceptance}</td>
      <td className={difficulty}>{difficulty}</td>
    </tr>
  );
}
export default Problems;
