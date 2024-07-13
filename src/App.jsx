import {React, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Link, useParams } from 'react-router-dom';

const problemSet = [[{
        title: "1. Bitwise AND of Numbers Range",
        difficulty: "Medium",
        acceptance: "42%",
        description: "Given two integers left and output that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
        examples: [{
            input: "left = 5, right = 7",
            output: "4"
        },
        {
            input: "left = 0, right = 0",
            output: "0"
        }]
    },
    {
        title: "2. Happy Number",
        difficulty: "Easy",
        acceptance: "56%",
        description: "Write an algorithm to determine if a number n is happy.",
        examples: [{
            input: "n = 19",
            output: "true"
        },
        {
            input: "n = 2",
            output: "false"
        }]
    },
    {
        title: "3. Isomorphic Strings",
        difficulty: "Easy",
        acceptance: "45.4%",
        description: "Two strings s and t are isomorphic if the characters in s can be replaced to get t.",
        examples: [{
            input: "s = 'egg', t = 'add",
            output: "true"
        },
        {
            input: "s = 'foo', t = 'bar'",
            output: "false"
        }]
    },
    {
        title: "4. Remove Linked List Elements",
        difficulty: "Hard",
        acceptance: "42%",
        description: "Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.",
        examples: [{
            input: "head = [1,2,6,3,4,5,6], val = 6",
            output: "[1,2,3,4,5]"
        },
        {
            input: "head = [], val = 1",
            output: "head = [], val = 1"
        }]
    },
    {
        title: "5. Longest Palindromic Substring",
        acceptance: "34.1%",
        difficulty: "Medium",
        description: "Given a string s, return the longest palindromic substring in s",
        examples: [{
            input: "babad",
            output: "bab"
        },
        {
            input: "cbbd",
            output: "bb"
        }]
    }],

    [{
        title: "6. Zigzag Conversion",
        acceptance: "48.6%",
        difficulty: "Medium",
        description: "Write the code that will take a string and make this conversion given a number of rows:",
        examples: [{
            input: "'PAYPALISHIRING', numRows = 3",
            output: "PAHNAPLSIIGYIR"
        },
        {
            input: "PAYPALISHIRING', numRows = 4",
            output: "PINALSIGYAHRPI"
        }]
    },
    {
        title: "7. Reverse Integer",
        acceptance: "28.9%",
        difficulty: "Medium",
        description: "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.",
        examples: [{
            input: "x = 123",
            output: "321"
        },
        {
            input: "x = -123",
            output: "-321"
        }]
    },
    {
        title: "8. String to Integer (atoi)",
        acceptance: "17.6%",
        difficulty: "Medium",
        description: "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.",
        examples: [{
            input: "'42'",
            output: "42"
        },
        {
            input: "' -042'",
            output: "-42"
        }]
    },
    {
        title: "9. Palindrome Number",
        acceptance: "56.9%",
        difficulty: "Easy",
        description: "Given an integer x, return true if x is a palindrome, and false otherwise.",
        examples: [{
            input: "x = 131",
            output: "true"
        },
        {
            input: "x = 19087",
            output: "false"
        }]
    },
    {
        title: "10. Regular Expression Matching",
        acceptance: "28.3%",
        difficulty: "Hard",
        description: "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where: '.' means any character & '*' matches zero or more preceding elements",
        examples: [{
            input: "s = 'aa', p = 'a'",
            output: "false"
        },
        {
            input: "s = 'aa', p = 'a*'",
            output: "true"
        }]
    }],

    [{
        title: "11. Trapping Rain Water",
        acceptance: "62.5%",
        difficulty: "Hard",
        description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
        examples: [{
            input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
            output: "6"
        },
        {
            input: "height = [4,2,0,3,2,5]",
            output: "9"
        }]
    },
    {
        title: "12. First Missing Positive",
        acceptance: "13.3%",
        difficulty: "Hard",
        description: "Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums",
        examples: [{
            input: "nums = [1,2,0]",
            output: "3"
        },
        {
            input: "nums = [3,4,-1,1]",
            output: "2"
        }]
    },
    {
        title: "13. Sqrt(x)",
        acceptance: "39.1%",
        difficulty: "Easy",
        description: "Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.",
        examples: [{
            input: "x = 4",
            output: "2"
        },
        {
            input: "x = 8",
            output: "2"
        }]
    },
    {
        title: "14. Partition List",
        acceptance: "56.7%",
        difficulty: "Medium",
        description: "Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x. You should preserve the original relative order of the nodes in each of the two partitions",
        examples: [{
            input: "head = [1,4,3,2,5,2], x = 3",
            output: "[1,2,2,4,3,5]"
        },
        {
            input: "head = [2,1], x = 2",
            output: "[1,2]"
        }]
    },
    {
        title: "15. Binary Tree Inorder Traversal",
        acceptance: "76.6%",
        difficulty: "Easy",
        description: "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
        examples: [{
            input: "root = [1,null,2,3]",
            output: "[1,3,2]"
        },
        {
            input: "root = []",
            output: "[]"
        }]
    }]
    ];


function App() {
    const [problems, setProblems] = useState(problemSet[0]);
    const location = useLocation();

    const handleButtonClick = (index) => {
        setProblems(problemSet[index]);
    }

    /* Added the routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems
       /problems/:problem_slug - A single problem page
     */

    return (
      <div>
        <div>
            {location.pathname === '/problemset/all' && (
                <div class="centre">
                    <button onClick={() => handleButtonClick(0)}>Problem Set 1</button>
                    <button onClick={() => handleButtonClick(1)}>Problem Set 2</button>
                    <button onClick={() => handleButtonClick(2)}>Problem Set 3</button>

                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Acceptance</th>
                                <th>Difficulty</th>
                            </tr>
                        </thead>
                        <tbody>
                        {problems.map(problem => (
                            <ProblemStatement 
                                title = {<Link to={`/problem/${problem.title.slice(3).toLowerCase().replace(/\s+/g, '-')}`}>{problem.title}</Link>}
                                acceptance = {problem.acceptance}
                                difficulty = {problem.difficulty}
                        />))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/problem/:problem_slug" element={<ProblemDetails />} />
        </Routes>
      </div> 
  );
  
}

function Signup() {
  return (
    <div class="container">
      <input type="text" placeholder='Enter email address'></input>
      <input type="text" placeholder='Enter password'></input>
      <button type='submit'>Sign-Up</button>
    </div>
  );
}

function Login() {
  return (
    <div class="container">
      <input type="text" placeholder='Enter email address'></input>
      <input type="text" placeholder='Enter password'></input>
      <button type='submit'>Login</button>
    </div>
  );
}

function ProblemStatement(props) {
    const title = props.title;
    const acceptance = props.acceptance;
    const difficulty = props.difficulty;

    return <tr>
        <td>
            {title}
        </td>
        <td>
            {acceptance}
        </td>
        <td class={difficulty.toLowerCase()}>
            {difficulty}
        </td>
    </tr>
}

function ProblemDetails() {
    const { problem_slug } = useParams();
    console.log(problem_slug);
    const problem = problemSet.flat().find(problem => problem.title.slice(3).toLowerCase().replace(/\s+/g, '-') === problem_slug);
    console.log(problem);
    if(!problem) {
        return <h1>Problem Not Found.</h1>
    }

    return (
        <div>
            <h1>{problem.title}</h1>
            <div class="container">
            <div>
                <h2>Description:</h2>
                <p>{problem.description}</p>
            </div>
            <div>
                <h3>Example 1:</h3>
                <h4><strong>Input:</strong> {problem.examples[0].input}</h4>
                <h4><strong>Output:</strong> {problem.examples[0].output}</h4>
            </div>
            <div>
                <h3>Example 2:</h3>
                <h4><strong>Input:</strong> {problem.examples[1].input}</h4>
                <h4><strong>Output:</strong> {problem.examples[1].output}</h4>
            </div>
            </div>
        </div>
    )
}
export default App
