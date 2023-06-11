import React from "react"
import Navigation from "./components/Navigation"
import Login from "./components/Login"
import "./App.css"
import {Route, Routes} from "react-router-dom"
import Problems from "./components/Problems"
import ProblemStatement from "./components/ProblemStatement"
import SignUp from "./components/SignUp"

const problems = [
  {
    id: "201",
    title: "Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%",
    statement: "Calculate AND for the given range",
  },
  {
    id: "202",
    title: "Sum of Two Numbers",
    difficulty: "Easy",
    acceptance: "41%",
    statement: "Calculate sum of two given numbers",
  },
  {
    id: "203",
    title: "Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%",
    statement:
      "Calculate happy number ie: if the number is divisible by 7 and 10, that number is a happy number",
  },
  {
    id: "204",
    title: "Remove Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%",
    statement: "Remove the following nodes from linked list and display the resulting list",
  },
]

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/problems" element={<Problems problems={problems} />} />
        <Route path="/problem-statement/:id" element={<ProblemStatement problems={problems} />} />
      </Routes>
    </div>
  )
}

export default App
