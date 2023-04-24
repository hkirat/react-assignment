export const problems = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    acceptance: "45.1%",
    question: [
      "Given an array of integers 'nums' and an integer 'target', find two numbers such that they add up to 'target'.",
      "Return the indices of the two numbers as an array.",
      "You may assume that each input would have exactly one solution, and you may not use the same element twice."
    ],
    inputDetails: [
      {
        label: "nums",
        type: "Array of integers",
        description: "An array of integers",
        example: "Input: nums = [2, 7, 11, 15], target = 9",
      },
      {
        label: "target",
        type: "Integer",
        description: "Target sum",
        example: "Output: [0, 1]",
      },
    ],
  },
  {
    id: 2,
    title: "Reverse Integer",
    difficulty: "Easy",
    acceptance: "25.6%",
    question: [
      "Given a 32-bit signed integer 'x', reverse its digits.",
      "If reversing 'x' causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0."
    ],
    inputDetails: [
      {
        label: "x",
        type: "Integer",
        description: "An integer",
        example: "Input: x = 123",
      },
    ],
  },
  {
    id: 3,
    title: "Palindrome Number",
    difficulty: "Easy",
    acceptance: "37.1%",
    question: [
      "Determine whether an integer 'x' is a palindrome.",
      "An integer is a palindrome when it reads the same backward as forward.",
      "For example, 121 is a palindrome, but -121 is not."
    ],
    inputDetails: [
      {
        label: "x",
        type: "Integer",
        description: "An integer",
        example: "Input: x = 121",
      },
    ],
  },
  {
    id: 4,
    title: "Roman to Integer",
    difficulty: "Easy",
    acceptance: "41.6%",
    question: [
      "Given a Roman numeral string 's', convert it to an integer.",
      "Roman numerals are represented by seven different symbols: I, V, X, L, C, D, and M.",
      "For example, 'IV' is 4 and 'IX' is 9."
    ],
    inputDetails: [
      {
        label: "s",
        type: "String",
        description: "A Roman numeral string",
        example: "Input: s = 'IV'",
      },
    ],
  },
  {
    id: 5,
    title: "Longest Common Prefix",
    difficulty: "Easy",
    acceptance: "37.4%",
    question: [
      "Write a function that takes an array of strings 'strs' and finds the longest common prefix of the strings.",
      "Return an empty string '' if there is no common prefix.",
      "For example, for the input ['flower', 'flow', 'flight'], the output should be 'fl'."
    ],
    inputDetails: [
      {
        label: "strs",
        type: "Array of strings",
        description: "An array of strings",
        example: "Input: strs = ['flower', 'flow', 'flight']",
      },
    ],
  }
]