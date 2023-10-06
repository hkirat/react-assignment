const problemlist = [
  {
    id: '1',
    title: 'Two Sum',
    description:
      'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
    acceptanceRate: '70%',
    difficulty: 'Easy',
    input: [2, 7, 11, 15],
    output: 9,
  },
  {
    id: '2',
    title: 'Reverse String',
    description:
      'Write a function that reverses a string. The input string is given as an array of characters.',
    acceptanceRate: '85%',
    difficulty: 'Easy',
    input: ['h', 'e', 'l', 'l', 'o'],
    output: 'olleh',
  },
  {
    id: '3',
    title: 'Palindrome Number',
    description:
      'Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.',
    acceptanceRate: '60%',
    difficulty: 'Medium',
    input: 121,
    output: 'true',
  },
  {
    id: '4',
    title: 'FizzBuzz',
    description:
      'Write a program that outputs the string representation of numbers from 1 to n. But for multiples of three, it should output "Fizz" instead of the number and for the multiples of five output "Buzz". For numbers which are multiples of both three and five, output "FizzBuzz".',
    acceptanceRate: '25%',
    difficulty: 'Hard',
    input: 15,
    output: [
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ],
  },
  {
    id: '5',
    title: 'Valid Parentheses',
    description:
      'Given a string containing just the characters "(", ")", "{", "}", "[", and "]", determine if the input string is valid.',
    acceptanceRate: '80%',
    difficulty: 'Medium',
    input: 'String s = "tailwindcss_is_so{coo)"',
    output: 'true',
  },
  {
    id: '6',
    title: 'Longest Common Prefix',
    description:
      'Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".',
    acceptanceRate: '70%',
    difficulty: 'Easy',
    input: ['flower', 'flow', 'flight'],
    output: 'fl',
  },
  {
    id: '7',
    title: 'Merge Two Sorted Lists',
    description:
      'Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.',
    acceptanceRate: '75%',
    difficulty: 'Easy',
    input: [
      [1, 2, 4],
      [1, 3, 4],
    ],
    output: [1, 1, 2, 3, 4, 4],
  },
  {
    id: '8',
    title: 'Reverse Integer',
    description:
      'Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.',
    acceptanceRate: '35%',
    difficulty: 'Hard',
    input: 123,
    output: 321,
  },
  {
    id: '9',
    title: 'Valid Anagram',
    description:
      'Given two strings s and t, return true if t is an anagram of s, and false otherwise.',
    acceptanceRate: '70%',
    difficulty: 'Medium',
    input: ['anagram', 'nagaram'],
    output: 'true',
  },
  {
    id: '10',
    title: 'Remove Duplicates from Sorted Array',
    description:
      'Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.',
    acceptanceRate: '75%',
    difficulty: 'Easy',
    input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
    output: 5,
  },
  {
    id: '11',
    title: 'Search Insert Position',
    description:
      'Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.',
    acceptanceRate: '65%',
    difficulty: 'Medium',
    input: [1, 3, 5, 6],
    output: 5,
  },
  {
    id: '12',
    title: 'Valid Palindrome',
    description:
      'Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.',
    acceptanceRate: '70%',
    difficulty: 'Easy',
    input: 'A man, a plan, a canal: Panama',
    output: true,
  },
];

export default problemlist;
