const ProblemsDescriptionList = [
  {
    title: 'Longest Substring Without Repeating Characters',
    description: 'Given a string s, find the length of the longest substring without repeating characters.',
    examples: [
      {
        input: 's = "abcabcbb"',
        output: '3',
        explanation: 'The answer is "abc", with the length of 3.'
      },
      {
        input: 's = "bbbbb"',
        output: '1',
        explanation: 'The answer is "b", with the length of 1.'
      },
      {
        input: 's = "pwwkew"',
        output: '3',
        explanation: 'The answer is "wke", with the length of 3.'
      }
    ]
  },
  {
    title: 'Check if the array is sorted',
    description: `Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

    There may be duplicates in the original array.
    
    Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.`,
    examples: [
      {
        input: 'nums = [3,4,5,1,2]',
        output: 'true',
        explanation: `1,2,3,4,5] is the original sorted array.
        You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].`
      },
      {
        input: 'nums = [2,1,3,4]',
        output: 'false',
        explanation: 'There is no sorted array once rotated that can make nums.'
      },
      {
        input: 'nums = [1,2,3]',
        output: 'true',
        explanation: `[1,2,3] is the original sorted array.
        You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.`
      }
    ]
  },
  {
    title: 'Left Rotate an array by one place',
    description: `Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.`,
    examples: [
      {
        input: 'nums = [1,2,3,4,5,6,7], k = 3',
        output: '[5,6,7,1,2,3,4]',
        explanation: `rotate 1 steps to the right: [7,1,2,3,4,5,6]
        rotate 2 steps to the right: [6,7,1,2,3,4,5]
        rotate 3 steps to the right: [5,6,7,1,2,3,4]`
      },
      {
        input: 'nums = [-1,-100,3,99], k = 2',
        output: '[3,99,-1,-100]',
        explanation: `rotate 1 steps to the right: [99,-1,-100,3]
        rotate 2 steps to the right: [3,99,-1,-100]`
      }
    ]
  },
  {
    title: 'Find the starting point in LL',
    description: `Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.\n

    There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.
    
    Do not modify the linked list.`,
    examples: [
      {
        input: 'head = [3,2,0,-4], pos = 1',
        output: 'tail connects to node index 1',
        explanation: `There is a cycle in the linked list, where tail connects to the second node.`
      },
      {
        input: 'head = [1,2], pos = 0',
        output: 'tail connects to node index 0',
        explanation: `There is a cycle in the linked list, where tail connects to the first node.`
      },
      {
        input: 'head = [1], pos = -1',
        output: 'no cycle',
        explanation: `There is no cycle in the linked list.`
      },
    ]
  }
  // Add more problem descriptions here
];
export default ProblemsDescriptionList;