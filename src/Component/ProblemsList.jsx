const problems = [
  {
    id: 200,
    title: "Number of Islands",
    acceptanceRate: "49.9%",
    difficulty: "Medium",
    problemStatement:
      "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.",
    input: `grid = [
                ["1","1","1","1","0"],
                ["1","1","0","1","0"],
                ["1","1","0","0","0"],
                ["0","0","0","0","0"]
              ]`,
    output: "1",
    explanation: "There is only one island in this case.",
  },
  {
    id: 347,
    title: "Top K Frequent Elements",
    acceptanceRate: "60.6%",
    difficulty: "Medium",
    problemStatement:
      "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
    input: "nums = [1,1,1,2,2,3], k = 2",
    output: "[1,2]",
    explanation: "Return the two most frequent elements, which are 1 and 2.",
  },
  {
    id: 152,
    title: "Maximum Product Subarray",
    acceptanceRate: "33.1%",
    difficulty: "Medium",
    problemStatement:
      "Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.",
    input: "nums = [2,3,-2,4]",
    output: "6",
    explanation: "The contiguous subarray [2,3] has the largest product = 6.",
  },
  {
    id: 104,
    title: "Maximum Depth of Binary Tree",
    acceptanceRate: "71.7%",
    difficulty: "Easy",
    problemStatement:
      "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
    input: "root = [3,9,20,null,null,15,7]",
    output: "3",
    explanation:
      "The maximum depth is 3 because there are 3 levels from the root node down to the farthest leaf node.",
  },
  {
    id: 11,
    title: "Container With Most Water",
    acceptanceRate: "54.7%",
    difficulty: "Medium",
    problemStatement:
      "Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.",
    input: "height = [1,8,6,2,5,4,8,3,7]",
    output: "49",
    explanation:
      "The max area is 49, corresponding to the heights of 8 and 7 at positions 2 and 8 respectively.",
  },

  {
    id: 53,
    title: "Maximum Subarray",
    acceptanceRate: "50.4%",
    difficulty: "Easy",
    problemStatement:
      "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
    output: "6",
    explanation: "The contiguous subarray [4,-1,2,1] has the largest sum = 6.",
  },
  {
    id: 21,
    title: "Merge Two Sorted Lists",
    acceptanceRate: "54.8%",
    difficulty: "Easy",
    problemStatement:
      "Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.",
    input: "l1 = [1,2,4], l2 = [1,3,4]",
    output: "[1,1,2,3,4,4]",
    explanation: "The merged linked list should be [1,1,2,3,4,4].",
  },
  {
    id: 22,
    title: "Generate Parentheses",
    acceptanceRate: "66.6%",
    difficulty: "Medium",
    problemStatement:
      "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    input: "n = 3",
    output: `["((()))","(()())","(())()","()(())","()()()"]`,
    explanation:
      "The generated parentheses are ((())), (()()), (())(), ()(()), and ()()().",
  },

  {
    id: 10,
    title: "Regular Expression Matching",
    acceptanceRate: "27.2%",
    difficulty: "Hard",
    problemStatement:
      "Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*' where:\n\n'.' Matches any single character.​​​​\n'*' Matches zero or more of the preceding element.\nThe matching should cover the entire input string (not partial).",
    input: 's = "aab", p = "c*a*b"',
    output: "true",
    explanation:
      'The regular expression pattern "c*a*b" matches the input string "aab".',
  },
  {
    id: 72,
    title: "Edit Distance",
    acceptanceRate: "48.7%",
    difficulty: "Hard",
    problemStatement:
      "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.\n\nYou have the following three operations permitted on a word:\n\nInsert a character\nDelete a character\nReplace a character",
    input: 'word1 = "horse", word2 = "ros"',
    output: "3",
    explanation:
      'The minimum number of operations required to convert "horse" to "ros" is 3: delete the letter "h", replace the letter "r" with the letter "o", and delete the letter "e".',
  },
  {
    id: 297,
    title: "Serialize and Deserialize Binary Tree",
    acceptanceRate: "44.4%",
    difficulty: "Hard",
    problemStatement:
      "Design an algorithm to serialize and deserialize a binary tree. The serialization format should be a preorder traversal of the tree. You may assume that each node in the tree is a non-negative integer less than 2^31.",
    input: "root = [1,2,3,null,null,4,5]",
    output: '"1 2 null null 3 4 null null 5 null null"',
    explanation:
      'The serialized format of the tree is "1 2 null null 3 4 null null 5 null null".',
  },
  {
    id: 239,
    title: "Sliding Window Maximum",
    acceptanceRate: "46.8%",
    difficulty: "Hard",
    problemStatement:
      "You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.",
    input: "nums = [1,3,-1,-3,5,3,6,7], k = 3",
    output: "[3,3,5,5,6,7]",
    explanation:
      "The maximum values in each sliding window are [3, 3, 5, 5, 6, 7].",
  },

  {
    id: 206,
    title: "Reverse Linked List",
    acceptanceRate: "67.2%",
    difficulty: "Easy",
    problemStatement:
      "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    input: "head = [1,2,3,4,5]",
    output: "[5,4,3,2,1]",
    explanation: "The reversed list of [1,2,3,4,5] is [5,4,3,2,1].",
  },
  {
    id: 542,
    title: "01 Matrix",
    acceptanceRate: "42.5%",
    difficulty: "Medium",
    problemStatement:
      "Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.\nThe distance between two adjacent cells is 1.",
    input: "mat = [[0,0,0],[0,1,0],[0,0,0]]",
    output: "[[0,0,0],[0,1,0],[0,0,0]]",
    explanation:
      "The distance to the nearest 0 for each cell is:\n[0,0,0]\n[0,1,0]\n[0,0,0]",
  },
  {
    id: 215,
    title: "Kth Largest Element in an Array",
    acceptanceRate: "50.1%",
    difficulty: "Medium",
    problemStatement:
      "Given an integer array nums and an integer k, return the kth largest element in the array.",
    input: "nums = [3,2,1,5,6,4], k = 2",
    output: "5",
    explanation: "The 2nd largest element in the array [3,2,1,5,6,4] is 5.",
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    acceptanceRate: "30.9%",
    difficulty: "Hard",
    problemStatement:
      "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
    input: "nums1 = [1,3], nums2 = [2]",
    output: "2.00000",
    explanation: "The median of the arrays [1,3] and [2] is 2.00000.",
  },
  {
    id: 329,
    title: "Longest Increasing Path in a Matrix",
    acceptanceRate: "44.5%",
    difficulty: "Hard",
    problemStatement:
      "Given an m x n integers matrix, return the length of the longest increasing path in matrix.",
    input: "matrix = [[9,9,4],[6,6,8],[2,1,1]]",
    output: "4",
    explanation:
      "The longest increasing path is [1, 2, 6, 9], which has length 4.",
  },

  {
    id: 110,
    title: "Container With Most Water",
    acceptanceRate: "54.3%",
    difficulty: "Medium",
    problemStatement:
      "Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.",
    input: "[1,8,6,2,5,4,8,3,7]",
    output: "49",
    explanation:
      "The two vertical lines are drawn at coordinates (1, 8) and (8, 7). Together, they form a container that contains 49 square units of water, which is the maximum amount of water that can be contained.",
  },
  {
    id: 15,
    title: "3Sum",
    acceptanceRate: "26.2%",
    difficulty: "Medium",
    problemStatement:
      "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.",
    input: "nums = [-1,0,1,2,-1,-4]",
    output: "[[-1,-1,2],[-1,0,1]]",
    explanation:
      "The solution set contains two triplets: [-1,-1,2] and [-1,0,1].",
  },
  {
    id: 20,
    title: "Valid Parentheses",
    acceptanceRate: "41.3%",
    difficulty: "Easy",
    problemStatement:
      "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order.",
    input: 's = "()[]{}"',
    output: "true",
    explanation:
      "The input string is valid because all the open brackets are closed by the same type of brackets and in the correct order.",
  },
  {
    id: 23,
    title: "Merge k Sorted Lists",
    acceptanceRate: "39.5%",
    difficulty: "Hard",
    problemStatement:
      "Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.",
    input: "lists = [[1,4,5],[1,3,4],[2,6]]",
    output: "[1,1,2,3,4,4,5,6]",
    explanation:
      "The input lists are merged into one sorted list: [1,1,2,3,4,4,5,6].",
  },
];

export default problems;
