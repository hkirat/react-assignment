const problems = [{
    number: "1",
    title: "Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%",
    description: "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
    examples: [
        {
          input: "left = 5, right = 7",
          output: " 4"
        },
        {
            input: "left = 0, right = 0",
            output: " 4"
        }
    ]
},
 {
        number: "2",
        title: "Happy Number",
        difficulty: "Easy",
        acceptance: "54.9%",
        description: `Write an algorithm to determine if a number n is happy.

        A happy number is a number defined by the following process:
        
        Starting with any positive integer, replace the number by the sum of the squares of its digits.
        Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
        Those numbers for which this process ends in 1 are happy.
        Return true if n is a happy number, and false if not.`,
        examples: [
            {
              input: " n = 19",
              output: " true"
            },
            {
                input: "n = 2",
                output: "false"
            }
        ]

    },

    {
        number: "3",
        title: "Remove Linked List Elements",
        difficulty: "Hard",
        acceptance: "42%",
        description: "Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.",
        examples: [
            {
              input: "head = [1,2,6,3,4,5,6], val = 6",
              output: "[1,2,3,4,5]"
            },
            {
                input: "head = [], val = 1",
                output: "[]"
            }
        ]
        
    },
    {
        number: "4",
        title: "Next Greater Element",
        difficulty: "Medium",
        acceptance: "30%",
        description: `The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

        You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
        
        For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.
        
        Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.`,
        examples: [
            {
              input: "nums1 = [4,1,2], nums2 = [1,3,4,2]",
              output: "[-1,3,-1]"
            },
            {
                input: "nums1 = [2,4], nums2 = [1,2,3,4]",
                output: "[3,-1]"
            }
        ]
    },
    {
        number: "5",
        title: "Detect a cycle in the linkedlist",
        difficulty: "Medium",
        acceptance: "60%",
        description: `Given head, the head of a linked list, determine if the linked list has a cycle in it.

        There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
        
        Return true if there is a cycle in the linked list. Otherwise, return false.`,
        examples: [
            {
              input: "head = [3,2,0,-4], pos = 1",
              output: "true"
            },
            {
                input: "head = [1,2], pos = 0",
                output: "true"
            }
        ]
    },
    {
        number: "6",
        title: "Create a clone of a graph",
        difficulty: "Hard",
        acceptance: "30%",
        description: `Given head, the head of a linked list, determine if the linked list has a cycle in it.

        There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
        
        Return true if there is a cycle in the linked list. Otherwise, return false.`,
        examples: [
            {
              input: "head = [3,2,0,-4], pos = 1",
              output: "true"
            },
            {
                input: "head = [1,2], pos = 0",
                output: "true"
            }
        ]
    },
    {
        number: "7",
        title: "2 Sum",
        difficulty: "Easy",
        acceptance: "80%",
        description: `Given head, the head of a linked list, determine if the linked list has a cycle in it.

        There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
        
        Return true if there is a cycle in the linked list. Otherwise, return false.`,
        examples: [
            {
              input: "head = [3,2,0,-4], pos = 1",
              output: "true"
            },
            {
                input: "head = [1,2], pos = 0",
                output: "true"
            }
        ]
    },
    {
        number: "8",
        title: "Longest Increasing Subsequence",
        difficulty: "Medium",
        acceptance: "50%",
        description: `Given head, the head of a linked list, determine if the linked list has a cycle in it.

        There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
        
        Return true if there is a cycle in the linked list. Otherwise, return false.`,
        examples: [
            {
              input: "head = [3,2,0,-4], pos = 1",
              output: "true"
            },
            {
                input: "head = [1,2], pos = 0",
                output: "true"
            }
        ]
    },
    {
        number: "9",
        title: "Inverse Element",
        difficulty: "Hard",
        acceptance: "42%",
        description: `Given head, the head of a linked list, determine if the linked list has a cycle in it.

        There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
        
        Return true if there is a cycle in the linked list. Otherwise, return false.`,
        examples: [
            {
              input: "head = [3,2,0,-4], pos = 1",
              output: "true"
            },
            {
                input: "head = [1,2], pos = 0",
                output: "true"
            }
        ]
    },
    {
        number: "10",
        title: "Maximum of Minimum of every window size",
        difficulty: "Hard",
        acceptance: "20%",
        description: `Given head, the head of a linked list, determine if the linked list has a cycle in it.

        There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
        
        Return true if there is a cycle in the linked list. Otherwise, return false.`,
        examples: [
            {
              input: "head = [3,2,0,-4], pos = 1",
              output: "true"
            },
            {
                input: "head = [1,2], pos = 0",
                output: "true"
            }
        ]
    }];

export default problems