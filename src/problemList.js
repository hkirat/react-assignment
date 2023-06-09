/*
 * Temporary problems array schema
 */
const problems = [{
    id: 1,
    title: "Add Two Numbers",
    difficulty: "Medium",
    accepted: 3700000,
    submitted: 9000000,
    description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.\n" +
        "\n" +
        "You may assume the two numbers do not contain any leading zero, except the number 0 itself.",
    examples: [
        {
            input: "l1 = [2,4,3], l2 = [5,6,4]",
            output: "[7,0,8]",
            explanation: " 342 + 465 = 807."
        },
        {
            input: "l1 = [0], l2 = [0]",
            output: "[0]"
        },
        {
            input: "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
            output: "[8,9,9,9,0,0,0,1]"
        }
    ],
    constraints: [
        "The number of nodes in each linked list is in the range [1, 100].",
        "0 <= Node.val <= 9",
        "It is guaranteed that the list represents a number that does not have leading zeros."
    ]
},{
    id: 2,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    accepted: 450,
    submitted: 1340,
    description: "Given a string s, find the length of the longest \n" +
        "substring\n" +
        " without repeating characters.",
    examples: [
        {
            input: "s = \"abcabcbb\"",
            output: "3",
            explanation: "The answer is \"abc\", with the length of 3."
        },
        {
            input: "s = \"bbbbb\"",
            output: "1",
            explanation: "The answer is \"b\", with the length of 1."
        },
        {
            input: "s = \"pwwkew\"",
            output: "3",
            explanation: "The answer is \"wke\", with the length of 3.\n" +
                "Notice that the answer must be a substring, \"pwke\" is a subsequence and not a substring."
        }
    ],
    constraints: [
        "0 <= s.length <= 5 * 104",
        "s consists of English letters, digits, symbols and spaces."
    ]
},{
    id: 3,
    title: "Two Sum",
    difficulty: "Easy",
    accepted: 980,
    submitted: 1970,
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n" +
        "\n" +
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.\n" +
        "\n" +
        "You can return the answer in any order.\n" +
        "\n",
    examples: [
        {
            input: "nums = [2,7,11,15], target = 9",
            output: "[0,1]",
            explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
        },
        {
            input: "nums = [3,2,4], target = 6",
            output: "[1,2]"
        },
        {
            input: "nums = [3,3], target = 6",
            output: "[0,1]"
        }
    ],
    constraints: [
        "2 <= nums.length <= 104",
        "-109 <= nums[i] <= 109",
        "-109 <= target <= 109",
        "Only one valid answer exists."
    ]
},{
    id: 4,
    title: "Merge k Sorted Lists\n",
    difficulty: "Hard",
    accepted: 160,
    submitted: 330,
    description: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.\n" +
        "\n" +
        "Merge all the linked-lists into one sorted linked-list and return it.",
    examples: [
        {
            input: "lists = [[1,4,5],[1,3,4],[2,6]]",
            output: "[1,1,2,3,4,4,5,6]",
            explanation: "The linked-lists are:\n" +
                "[\n" +
                "  1->4->5,\n" +
                "  1->3->4,\n" +
                "  2->6\n" +
                "]\n" +
                "merging them into one sorted list:\n" +
                "1->1->2->3->4->4->5->6"
        },
        {
            input: "lists = []",
            output: "[]"
        },
        {
            input: "lists = [[]]",
            output: "[]"
        }
    ],
    constraints: [
        "k == lists.length",
        "0 <= k <= 104",
        "0 <= lists[i].length <= 500",
        "-104 <= lists[i][j] <= 104",
        "lists[i] is sorted in ascending order.",
        "The sum of lists[i].length will not exceed 104."
    ]
}];

export default problems