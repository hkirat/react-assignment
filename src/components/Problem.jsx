import React from 'react'
import './Problem.css'
import { useLocation } from 'react-router-dom'
const problems = [{
    number: "1",
    title: "Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%"
},
 {
        number: "2",
        title: "Happy Number",
        difficulty: "Easy",
        acceptance: "54.9%"
    },

    {
        number: "3",
        title: "Remove Linked List Elements",
        difficulty: "Hard",
        acceptance: "42%"
    },
    {
        number: "4",
        title: "Next Greater Element",
        difficulty: "Medium",
        acceptance: "30%"
    },
    {
        number: "5",
        title: "Detect a cycle in the linkedlist",
        difficulty: "Medium",
        acceptance: "60%"
    },
    {
        number: "6",
        title: "Create a clone of a graph",
        difficulty: "Hard",
        acceptance: "30%"
    },
    {
        number: "7",
        title: "2 Sum",
        difficulty: "Easy",
        acceptance: "80%"
    },
    {
        number: "8",
        title: "Longest Increasing Subsequence",
        difficulty: "Medium",
        acceptance: "50%"
    },
    {
        number: "9",
        title: "Inverse Element",
        difficulty: "Hard",
        acceptance: "42%"
    },
    {
        number: "10",
        title: "Maximum of Minimum of every window size",
        difficulty: "Hard",
        acceptance: "%"
    }];
function Problem() {
    const location = useLocation();
    const queryParameters = new URLSearchParams(location.search);
    const idx = parseInt(queryParameters.get("id"));
    
  return (
    <div>
     {
       problems[idx-1].title
     }
    </div>
  )
}

export default Problem