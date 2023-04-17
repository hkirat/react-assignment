import React from "react";
import "../App.css"

export default function Problem() {
  const title = "Two Sum";
  const description = `
    Given an array of integers, find two numbers such that they add up to a specific target number.
    The function twoSum should return indices of the two numbers such that they add up to the target, 
    where index1 must be less than index2.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    Example:
    Input: nums = [2, 7, 11, 15], target = 9
    Output: [0, 1]
    Explanation: nums[0] + nums[1] = 2 + 7 = 9.
  `;

  return (
    <div className="problem-details">
      <h1 className="problem-title">{title}</h1>
      <p className="problem-description">{description}</p>
    </div>
  );
}