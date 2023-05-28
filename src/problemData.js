

const problems = [
    {
      id: "1",
      title: "Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "42%",
      description: "Given a range [left, right] (inclusive), find the bitwise AND of all the numbers in the range.",
      sampleTestCases: [
        {
          input: "5, 7",
          output: "4"
        },
        {
          input: "0, 1",
          output: "0"
        },
        // Add more sample test cases as needed
      ]
    },
    {
      id: "2",
      title: "Happy Number",
      difficulty: "Easy",
      acceptance: "54.9%",
      description: "A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.",
      sampleTestCases: [
        {
          input: "19",
          output: "true"
        },
        {
          input: "2",
          output: "false"
        },
        // Add more sample test cases as needed
      ]
    },
    {
      id: "3",
      title: "Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%",
      description: "Remove all elements from a linked list that have a specific value.",
      sampleTestCases: [
        {
          input: "[1, 2, 6, 3, 4, 5, 6], 6",
          output: "[1, 2, 3, 4, 5]"
        },
        {
          input: "[7, 7, 7, 7], 7",
          output: "[]"
        },
        // Add more sample test cases as needed
      ]
    },
    {
      id: "4",
      title: "Reverse String",
      difficulty: "Easy",
      acceptance: "68%",
      description: "Write a function that reverses a string.",
      sampleTestCases: [
        {
          input: "'hello'",
          output: "'olleh'"
        },
        {
          input: "'world'",
          output: "'dlrow'"
        },
        // Add more sample test cases as needed
      ]
    },
    {
      id: "5",
      title: "Palindrome Number",
      difficulty: "Easy",
      acceptance: "52%",
      description: "Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.",
      sampleTestCases: [
        {
          input: "121",
          output: "true"
        },
        {
          input: "-121",
          output: "false"
        },
        // Add more sample test cases as needed
      ]
    },
    {
      id: "6",
      title: "Two Sum",
      difficulty: "Easy",
      acceptance: "84%",
      description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      sampleTestCases: [
        {
          input: "[2, 7, 11, 15], 9",
          output: "[0, 1]"
        },
        {
          input: "[3, 2, 4], 6",
          output: "[1, 2]"
        },
        // Add more sample test cases as needed
      ]
    },
    {
      id: "7",
      title: "Valid Parentheses",
      difficulty: "Easy",
      acceptance: "71%",
      description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      sampleTestCases: [
        {
          input: "'()'",
          output: "true"
        },
        {
          input: "'([)]'",
          output: "false"
        },
        // Add more sample test cases as needed
      ]
    },
    {
      id: "8",
      title: "Merge Two Sorted Lists",
      difficulty: "Easy",
      acceptance: "56%",
      description: "Merge two sorted linked lists and return it as a sorted list.",
      sampleTestCases: [
        {
          input: "[1, 2, 4], [1, 3, 4]",
          output: "[1, 1, 2, 3, 4, 4]"
        },
        {
          input: "[], []",
          output: "[]"
        },
        // Add more sample test cases as needed
      ]
    },
    {
      id: "9",
      title: "Maximum Subarray",
      difficulty: "Easy",
      acceptance: "63%",
      description: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
      sampleTestCases: [
        {
          input: "[-2, 1, -3, 4, -1, 2, 1, -5, 4]",
          output: "6"
        },
        {
          input: "[1]",
          output: "1"
        },
        // Add more sample test cases as needed
      ]
    },
    {
      id: "10",
      title: "Fizz Buzz",
      difficulty: "Easy",
      acceptance: "67%",
      description: "Write a program that outputs the string representation of numbers from 1 to n. But for multiples of three, it should output 'Fizz' instead of the number and for the multiples of five, output 'Buzz'. For numbers which are multiples of both three and five, output 'FizzBuzz'.",
      sampleTestCases: [
        {
          input: "3",
          output: "['1', '2', 'Fizz']"
        },
        {
          input: "5",
          output: "['1', '2', 'Fizz', '4', 'Buzz']"
        },
        // Add more sample test cases as needed
      ]
    },
    {
      id: "11",
      title: "Reverse Integer",
      difficulty: "Easy",
      acceptance: "50%",
      description: "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.",
      sampleTestCases: [
        {
          input: "123",
          output: "321"
        },
        {
          input: "-123",
          output: "-321"
        },
        // Add more sample test cases as needed
      ]
    },
    {
      id: "12",
      title: "Remove Duplicates from Sorted Array",
      difficulty: "Easy",
      acceptance: "58%",
      description: "Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.",
      sampleTestCases: [
        {
          input: "[1, 1, 2]",
          output: "2"
        },
        {
          input: "[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]",
          output: "5"
        },
        // Add more sample test cases as needed
      ]
    },
    {
      id: "13",
      title: "Valid Anagram",
      difficulty: "Easy",
      acceptance: "62%",
      description: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
      sampleTestCases: [
        {
          input: "'anagram', 'nagaram'",
          output: "true"
        },
        {
          input: "'rat', 'car'",
          output: "false"
        },
        // Add more sample test cases as needed
      ]
    },
    // Add more problems here
  ];
  
  export default problems;
  