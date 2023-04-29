import React, {useState, useEffect, useContext} from 'react';
import Problems from '../problemset/Problems';
import './twosum.css';
import Landing from '../codeeditor/Landing';

import { useSelector } from 'react-redux';

function Twosum() {
 
  
const prblm = [
    {
      questionId:'1',
      title: '1. Two sum',
      description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
      examples: [
        {
          Input: "nums = [2,7,11,15], target = 9",
          Output: [0,1],
          Explanation: " Because nums[0] + nums[1] == 9, we return [0, 1]."
        },
        {
          Input: "nums = [3,2,4], target = 6",
          Output: [1,2]
        }
      ],
    },
    {
      questionId:'2',
      title: '201. Add Two Numbers',
      description: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.',
      examples: [
        {
          Input: "l1 = [2,4,3], l2 = [5,6,4]",
          Output: [7,0,8],
          Explanation: "342 + 465 = 807."
        },
        {
          Input: "l1 = [0], l2 = [0]",
          Output: [0]
        }
      ],
    },
    {
      questionId:'3',
      title: '202. Zigzag Conversion',
      description: 'The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)',
      examples: [
        {
          Input: "s = 'PAYPALISHIRING', numRows = 3",
          Output: "PAHNAPLSIIGYIR",
          Explanation: "P   A   H   N\nA P L S I I G\nY   I   R"
        },
        {
          Input: "s = 'PAYPALISHIRING', numRows = 4",
          Output: "PINALSIGYAHRPI",
          Explanation: "P     I    N\nA   L S  I G\nY A   H R\nP     I"
        }
      ],
    },
    {
      questionId:'4',
      title: '203. Reverse Integer',
      description: 'Given a 32-bit signed integer, reverse digits of an integer.',
      examples: [
        {
          Input: "x = 123",
          Output: 321
        },
        {
          Input: "x = -123",
          Output: -321
        },
        {
          Input: "x = 120",
          Output: 21
        }
      ],
    }
  ];
  
  const id = useSelector(state => state.id);
  console.log(id);
  const filteredPrblm = prblm.filter((problem) => {
    return problem.questionId === id.id;
  });

  if (filteredPrblm.length === 0) {
    return (
      <div className="ex-container">
        <div className="ex-body">
          <h1 className="ex-head">leetcode</h1>
          
        </div>
        <div className="code-runner">
          <Landing/>
        </div>
      </div>
    );
  }

  const problem = filteredPrblm[0];

  return (
    <div className="ex-container">
      <div className="ex-body">
        <h1 className="ex-head">leetcode</h1>
        <h2 >{problem.title}</h2>
        <p style={{maxWidth:"120vh"}}>{problem.description}</p>
        <h3>Examples:</h3>
        {problem.examples.map((example, index) => (
  <Prex key={index} index={index} input={example["Input"]} output={example["Output"]} explanation={example["Explanation"]} />
))}


      </div>
      <div className="code-runner">
        <Landing/>
      </div>
    </div>
  );
  
}

function Prex(props) {
  return (
    <div>
      <br />
      example : {props.index}
      <div className="ex-box">
        <br />
        <strong>input : </strong>
        {props.input}
        <br />
        <br />
        <strong>Output : </strong>
        {props.output}
        <br />
        <br />

        {props.explanation && (
          <>
            <strong>Explanation: </strong>
            {props.explanation}
          </>
        )}
      </div>
    </div>
  );
}

export default Twosum;
