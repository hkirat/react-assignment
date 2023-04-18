const problemStatements = [
    {
        _id: 200,
        statement: "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.",
        examples: [
            {
                Input: "grid = [\n" +
                    "[\"1\",\"1\",\"1\",\"1\",\"0\"],\n" +
                    "[\"1\",\"1\",\"0\",\"1\",\"0\"],\n" +
                    "[\"1\",\"1\",\"0\",\"0\",\"0\"],\n" +
                    "[\"0\",\"0\",\"0\",\"0\",\"0\"]\n" +
                "]\n",
                Output: "1"
            }
        ],
    },
    {
        _id: 201,
        statement: "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
        examples: [
            {
                Input: "left = 5, right = 7",
                Output: "4"
            },
            {
                Input: "left = 0, right = 0",
                Output: "0"
            },
            {
                Input: "left = 1, right = 2147483647",
                Output: "0"
            }
        ],
    },
    {
        _id: 202,
        statement: "Write an algorithm to determine if a number n is happy.\n" +
            "\n" +
            "A happy number is a number defined by the following process:\n" +
            "\n" +
            "Starting with any positive integer, replace the number by the sum of the squares of its digits.\n" +
            "Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.\n" +
            "Those numbers for which this process ends in 1 are happy.\n" +
            "Return true if n is a happy number, and false if not.",
        examples: [
            {
                Input: "n = 19",
                Output: "true"
            },
            {
                Input: "n = 2",
                Output: "false"
            }
        ]
    },
    {
        _id: 203,
        statement: "Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.",
        examples: [
            {
                Input: "head = [1,2,6,3,4,5,6], val = 6",
                Output: "[1,2,3,4,5]"
            },
            {
                Input: "head = [], val = 1",
                Output: "[]"
            }
        ]
    },
    {
        _id: 204,
        statement: "Given an integer n, return the number of prime numbers that are strictly less than n.",
        examples: [
            {
                Input: "n = 10",
                Output: "4"
            },
            {
                Input: "n = 0",
                Output: "0"
            },
            {
                Input: "n = 1",
                Output: "0"
            }
        ]
    },
    {
        _id: 205,
        statement: "Given two strings s and t, determine if they are isomorphic.\n" +
            "\n" +
            "Two strings s and t are isomorphic if the characters in s can be replaced to get t.\n" +
            "\n" +
            "All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.",
        examples: [
            {
                Input: "s = \"egg\", t = \"add\"",
                Output: "true"
            },
            {
                Input: "s = \"foo\", t = \"bar\"",
                Output: "false"
            }
        ]
    },
    {
        _id: 206,
        statement: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
        examples: [
            {
                Input: "head = [1,2,3,4,5]",
                Output: "[5,4,3,2,1]"
            },
            {
                Input: "head = [1,2]",
                Output: "[2,1]"
            }
        ]
    },
    {
        _id: 207,
        statement: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.\n" +
            "\n" +
            "For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.\n" +
            "Return true if you can finish all courses. Otherwise, return false.\n" +
            "\n",
        examples: [
            {
                Input: "numCourses = 2, prerequisites = [[1,0]]",
                Output: "true"
            },
            {
                Input: "numCourses = 2, prerequisites = [[1,0],[0,1]]",
                Output: "false"
            }
        ]
    },
    {
        _id: 208,
        statement: "A trie (pronounced as \"try\") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.\n" +
            "\n" +
            "Implement the Trie class:",
        examples: [
            {
                Input:
                    "[\"Trie\", \"insert\", \"search\", \"search\", \"startsWith\", \"insert\", \"search\"]\n" +
                    "[[], [\"apple\"], [\"apple\"], [\"app\"], [\"app\"], [\"app\"], [\"app\"]]",
                Output:
                    "[null, null, true, false, true, null, true]"
            }
        ]
    },
    {
        _id: 209,
        statement: "Given an array of positive integers nums and a positive integer target, return the minimal length of a \n" +
            "subarray\n" +
            " whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.",
        examples: [
            {
                Input: "target = 7, nums = [2,3,1,2,4,3]",
                Output: "2"
            },
            {
                Input: "target = 11, nums = [1,1,1,1,1,1,1,1]",
                Output: "0"
            }
        ]
    },
    {
        _id: 210,
        statement: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.\n" +
            "\n" +
            "For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.\n" +
            "Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.",
        examples: [
            {
                Input: "numCourses = 2, prerequisites = [[1,0]]",
                Output: "[0,1]"
            },
            {
                Input: "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
                Output: "[0,2,1,3]"
            }
        ]
    },
    {
        _id: 211,
        statement: "Design a data structure that supports adding new words and finding if a string matches any previously added string.\n" +
            "\n" +
            "Implement the WordDictionary class:\n" +
            "\n" +
            "WordDictionary() Initializes the object.\n" +
            "void addWord(word) Adds word to the data structure, it can be matched later.\n" +
            "bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.",
        examples: [
            {
                Input:
                    "[\"WordDictionary\",\"addWord\",\"addWord\",\"addWord\",\"search\",\"search\",\"search\",\"search\"]\n" +
                    "[[],[\"bad\"],[\"dad\"],[\"mad\"],[\"pad\"],[\"bad\"],[\".ad\"],[\"b..\"]]",
                Output:
                    "[null,null,null,null,false,true,true,true]"
            }
        ]
    },
    {
        _id: 212,
        statement: "Given an m x n board of characters and a list of strings words, return all words on the board.\n" +
            "\n" +
            "Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.",
        examples: [
            {
                Input: "board = [[\"o\",\"a\",\"a\",\"n\"],[\"e\",\"t\",\"a\",\"e\"],[\"i\",\"h\",\"k\",\"r\"],[\"i\",\"f\",\"l\",\"v\"]], words = [\"oath\",\"pea\",\"eat\",\"rain\"]",
                Output: "[\"eat\",\"oath\"]"
            }
        ]
    },
    {
        _id: 213,
        statement: "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.\n" +
            "\n" +
            "Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",
        examples: [
            {
                Input: "nums = [2,3,2]",
                Output: "3"
            },
            {
                Input: "nums = [1,2,3,1]",
                Output: "4"
            }
        ]
    },
    {
        _id: 214,
        statement: "You are given a string s. You can convert s to a \n" +
            "palindrome\n" +
            " by adding characters in front of it.\n" +
            "\n" +
            "Return the shortest palindrome you can find by performing this transformation.",
        examples: [
            {
                Input: "s = \"aacecaaa\"",
                Output: "\"aaacecaaa\""
            }
        ]
    },
    {
        _id: 215,
        statement: "Given an integer array nums and an integer k, return the kth largest element in the array.\n" +
            "\n" +
            "Note that it is the kth largest element in the sorted order, not the kth distinct element.\n" +
            "\n" +
            "You must solve it in O(n) time complexity.",
        examples: [
            {
                Input: "nums = [3,2,1,5,6,4], k = 2",
                Output: "5"
            }
        ]
    }
]

export default problemStatements;
