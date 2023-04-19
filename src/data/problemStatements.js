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
    }
]

export default problemStatements;
