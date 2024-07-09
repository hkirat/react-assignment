import express from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
import { auth } from "./middleware.js";
import jwt from "jsonwebtoken";
const app = express();
const port = 3000;
const JWT_SECRET = "secret";

app.use(cors());

const SUBMISSIONS = [];
const USERS = [];
const PROBLEMS = [
  {
    index: 1,
    title: "Two Sum",
    difficulty: "Easy",
    acceptance: "45.9%",
    input: "nums = [2,7,11,15], target = 9",
    output: "[0,1]",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
  },
  {
    index: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    acceptance: "36.8%",
    input: "l1 = [2,4,3], l2 = [5,6,4]",
    output: "[7,0,8]",
    description:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
  },
  {
    index: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    acceptance: "31.5%",
    input: 's = "abcabcbb"',
    output: "3",
    description:
      "Given a string s, find the length of the longest substring without repeating characters.",
  },
  {
    index: 4,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    acceptance: "29.4%",
    input: "nums1 = [1,3], nums2 = [2]",
    output: "2.0",
    description:
      "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
  },
  {
    index: 5,
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    acceptance: "31.7%",
    input: 's = "babad"',
    output: '"bab"',
    description:
      "Given a string s, return the longest palindromic substring in s.",
  },
  {
    index: 6,
    title: "ZigZag Conversion",
    difficulty: "Medium",
    acceptance: "41.3%",
    input: 's = "PAYPALISHIRING", numRows = 3',
    output: '"PAHNAPLSIIGYIR"',
    description:
      "The string 'PAYPALISHIRING' is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)",
  },
  {
    index: 7,
    title: "Reverse Integer",
    difficulty: "Easy",
    acceptance: "27.2%",
    input: "x = 123",
    output: "321",
    description:
      "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.",
  },
  {
    index: 8,
    title: "String to Integer (atoi)",
    difficulty: "Medium",
    acceptance: "16.6%",
    input: 's = "42"',
    output: "42",
    description:
      "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).",
  },
  {
    index: 9,
    title: "Palindrome Number",
    difficulty: "Easy",
    acceptance: "52.5%",
    input: "x = 121",
    output: "true",
    description:
      "Given an integer x, return true if x is palindrome integer. An integer is a palindrome when it reads the same backward as forward.",
  },
  {
    index: 10,
    title: "Container With Most Water",
    difficulty: "Medium",
    acceptance: "53.1%",
    input: "height = [1,8,6,2,5,4,8,3,7]",
    output: "49",
    description:
      "Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.",
  },
];
var USER_ID_COUNTER = 1;

app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true }));

//SignUp
//SignUp
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const userExist = USERS.find((user) => user.email == email);

  if (!userExist) {
    const user = { email, password: hashedPassword, id: USER_ID_COUNTER++ };
    USERS.push(user);
    res.status(200).json({ message: "User created successfully" });
  } else {
    res.status(400).json({ error: "User with this email already exists" });
  }
  console.log(USERS);
});

//Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = USERS.find((user) => user.email === email);

  if (!user) {
    return res.status(403).json({ error: "User not found" });
  }
  const passwordMatches = await bcrypt.compare(password, user.password);
  // if (user.password !== password) {
  //   return res.status(403).json({ message: "Incorrect Password" });
  // }
  if (!passwordMatches) {
    return res.status(403).json({ message: "Incorrect Password" });
  }
  const token = jwt.sign(
    {
      id: user.id,
    },
    JWT_SECRET
  );
  console.log(token);
  return res.json({ token });
});

//AllProblems
app.get("/problems/all", (req, res) => {
  // const problems = PROBLEMS.map((x) => {
  //   index: x.index;
  //   difficulty: x.difficulty;
  //   title: x.title;
  //   acceptance: x.acceptance;
  // });
  res.status(200).send(PROBLEMS);
  // res.json({
  //   problems,
  // });
});

//SingleProblems
app.get("/problems/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  // console.log(id);
  const problem = PROBLEMS.find((p) => p.index === id);
  if (!problem) {
    return res.status(411).json({});
  }
  // const { index, title, difficulty, acceptance, input, output } = problem;
  // res.json({
  //   problem: { index, title, difficulty, acceptance, input, output },
  // });
  res.json({ problem });
});

//Authentication
app.get("/me", auth, (req, res) => {
  const user = USERS.find((x) => x.id === req.userId);
  res.json({ user });
});

app.post("/submissions", auth, (req, res) => {
  const isCorrect = Math.random() < 0.5;
  const id = req.body.id;
  const submission = req.body.submission;

  if (isCorrect) {
    SUBMISSIONS.push({
      submission,
      id,
      userId: req.userId,
      status: "AC",
    });
    console.log(SUBMISSIONS);
    return res.json({
      status: "AC",
    });
  } else {
    SUBMISSIONS.push({
      submission,
      id,
      userId: req.userId,
      status: "WA",
    });
    return res.json({
      status: "WA",
    });
  }
});

app.get("/submissions/:id", auth, (req, res) => {
  const id = parseInt(req.params.id, 10);
  const submissions = SUBMISSIONS.filter(
    (x) => x.id === id && x.userId == req.userId
  );
  // res.status(200).send(SUBMISSIONS);
  console.log(submissions);
  res.status(200).json(submissions);
  // res.json({ submission });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
