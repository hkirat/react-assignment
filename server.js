// const express = require('express');
// const cors = require('cors')
// const app = express();

// app.use(cors());

// app.use('/login', (req, res) => {
//   res.send({
//     token: 'test123'
//   });
// });

// app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));

import express from "express";
const app = express();
const port = 3000;
import jwt from "jsonwebtoken";
import auth from "./middleware.js";
let USER_ID_COUNTER = 1;
const USERS = [];
const JWT_SECRET = "secret";
import bodyParser from "body-parser";
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
import cors from "cors";
app.use(cors());
app.use(jsonParser);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const PROBLEMS = [
  {
    problemId: "1",
    title: "401. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%",
    description:
      "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
    exampleIn: "left = 5, right = 7",
    exampleOut: "4",
  },
  {
    problemId: "2",
    title: "205. Add two numbers",
    difficulty: "Medium",
    acceptance: "41%",
    description:
      "Given two numbers, add them and return them in integer range. use MOD=1e9+7",
    exampleIn: "a = 100 , b = 200",
    exampleOut: "300",
  },
  {
    problemId: "3",
    title: "202. Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%",
    description: "Write an algorithm to determine if a number n is happy.",
    exampleIn: "n = 19",
    exampleOut: "true",
  },
  {
    problemId: "4",
    title: "203. Remove Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%",
    description: "Given number k , removed kth element",
    exampleIn: "list: 1->2->3 , k=2",
    exampleOut: "1->3",
  },
  {
    problemId: "5",
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%",
    description:
      "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
    exampleIn: "left = 5, right = 7",
    exampleOut: "4",
  },
  {
    problemId: "6",
    title: "205. Add two numbers",
    difficulty: "Medium",
    acceptance: "41%",
    description:
      "Given two numbers, add them and return them in integer range. use MOD=1e9+7",
    exampleIn: "a = 100 , b = 200",
    exampleOut: "300",
  },
  {
    problemId: "7",
    title: "202. Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%",
    description: "Write an algorithm to determine if a number n is happy.",
    exampleIn: "n = 19",
    exampleOut: "true",
  },
  {
    problemId: "8",
    title: "203. Remove Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%",
    description: "Given number k , removed kth element",
    exampleIn: "list: 1->2->3 , k=2",
    exampleOut: "1->3",
  },
];

const SUBMISSIONS = [];

//app.unsubscribe(cors());

// const allowedOrigins = ['http://localhost',
//                       'http://127.0.0.1'];

// app.use(cors({
//     origin: function(origin, callback){
//         if(!origin) return callback(null, true);
//         if(allowedOrigins.indexOf(origin) === -1){
//           const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//           return callback(new Error(msg), false);
//         }
//         return callback(null, true);
//       },
//     credentials: true,
//     preflightContinue: true,
//     methods: ['GET', 'POST', 'PUT', 'PATCH' , 'DELETE', 'OPTIONS'],
// }));
// const whitelist = ['http://127.0.0.1', 'http://127.0.0.1:5173']
// app.use(cors({
//     origin: (origin, callback) => {
//         if (whitelist.indexOf(origin) !== -1) {
//           callback(null, true)
//         } else {
//           callback(new Error())
//         }
//       }
// }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// app.use("/login", (req, res) => {
//   debugger;
//   //res.setHeader("Access-Control-Allow-Origin", "*");
//   res.send({
//     token: "test123",
//   });
// });

app.get("/", (req, res) => {
  res.json({
    msg: "hello world",
  });
});

app.get("/problems", (req, res) => {
  const filteredProblems = PROBLEMS.map((x) => ({
    problemId: x.problemId,
    difficulty: x.difficulty,
    acceptance: x.acceptance,
    title: x.title,
  }));

  res.json({
    problems: filteredProblems,
  });
});

app.get("/problems/:id", (req, res) => {
  const id = req.params.id;

  const problem = PROBLEMS.find((x) => x.problemId === id);

  if (!problem) {
    return res.status(411).json({});
  }

  res.json({
    problem,
  });
});

app.get("/me", auth, (req, res) => {
  debugger;
  const user = USERS.find((x) => x.id === req.userId);
  res.json({ email: user.email, id: user.id });
});

app.get("/submissions/:problemId", auth, (req, res) => {
  const problemId = req.params.problemId;
  const submissions = SUBMISSIONS.filter(
    (x) => x.problemId === problemId && x.userId === req.userId
  );
  res.json({
    submissions,
  });
});

app.post("/submission", auth, (req, res) => {
  const isCorrect = Math.random() < 0.5;
  const problemId = req.body.problemId;
  const submission = req.body.submission;

  if (isCorrect) {
    SUBMISSIONS.push({
      submission,
      problemId,
      userId: req.userId,
      status: "AC",
    });
    return res.json({
      status: "AC",
    });
  } else {
    SUBMISSIONS.push({
      submission,
      problemId,
      userId: req.userId,
      status: "WA",
    });
    return res.json({
      status: "WA",
    });
  }
});

app.post("/signup", (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  console.log("signup");
  console.log(email, password);
  if (USERS.find((x) => x.email === email)) {
    return res.status(403).json({ msg: "Email already exists" });
  }

  let newid = USER_ID_COUNTER++;
  USERS.push({
    email,
    password,
    id: newid,
  });
  const token = jwt.sign(
    {
      id: newid,
    },
    JWT_SECRET
  );
  return res.json({
    msg: "Success",
    token: token,
  });
});

app.post("/login", (req, res) => {
  debugger;
  const email = req.body.loginEmail;
  const password = req.body.loginPassword;
  const user = USERS.find((x) => x.email === email);
  console.log(JSON.stringify(USERS));
  console.log("login");
  console.log(email, password);
  if (!user) {
    return res.status(403).json({ msg: "User not found" });
  }

  if (user.password !== password) {
    return res.status(403).json({ msg: "Incorrect password" });
  }

  const token = jwt.sign(
    {
      id: user.id,
    },
    JWT_SECRET
  );
  console.log(token);
  return res.json({ msg: "Success", token: token });
});

app.listen(9090, () =>
  console.log("API is running on http://localhost:9090/login")
);
