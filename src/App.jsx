import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";

/*
 * Temporary problems array schema
 */
const problems = [
  {
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%",
  },
  {
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "412%",
  },
  {
    title: "202. Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%",
  },
  {
    title: "203. Remove Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%",
  },
];

function App() {
  /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

  return (
    <div className="bg-[#202020] text-gray-200 w-[100vw] h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-col p-2">
                <Header />
                <h1 className="text-4xl text-[#f8f8f8] p-10 py-36 mx-auto">
                  LeetCode - The React Assignment
                </h1>
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path='/problem/:title' element={<Problem/>}/> */}
          {/* </Route> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/register" element={<register />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// A demo component
function ProblemStatement(props) {
  const title = props.title;
  const acceptance = props.acceptance;
  const difficulty = props.difficulty;

  return (
    <tr>
      <td>{title}</td>
      <td>{acceptance}</td>
      <td>{difficulty}</td>
    </tr>
  );
}
export default App;
