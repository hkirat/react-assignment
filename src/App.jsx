import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";


function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;

// /*
//  * Temporary problems array schema
//  */
// const problems = [
//   {
//     title: "201. Bitwise AND of Numbers Range",
//     difficulty: "Medium",
//     acceptance: "42%",
//   },
//   {
//     title: "202 Bitwise AND of Numbers Range",
//     difficulty: "Medium",
//     acceptance: "412%",
//   },
//   {
//     title: "203. Happy Number",
//     difficulty: "Easy",
//     acceptance: "54.9%",
//   },
//   {
//     title: "204. Remove Linked List Elements",
//     difficulty: "Hard",
//     acceptance: "42%",
//   }
// ];

// function App() {
//   /* Add routing here, routes look like -
//        /login - Login page
//        /signup - Signup page
//        /problemset/all/ - All problems (see problems array above)
//        /problems/:problem_slug - A single problem page
//      */
//   const listProblems= problems.map((problem) => (
//   <ProblemStatement
// // key={problem.title}

//     title={problem.title}
//     acceptance={problem.acceptance}
//     difficulty={problem.difficulty}
//   />
// ));
//   return (
//     <>
//       <div>
//         Finish the assignment! Look at the comments in App.jsx as a starting
//         point
//         <App1 />
//       </div>
//       <div>
//         <AboutPage />

// {listProblems}
//       </div>
//     </>
//   );
// }

// function App1() {
//   /* Add routing here, routes look like -
//        /login - Login page
//        /signup - Signup page
//        /problemset/all/ - All problems (see problems array above)
//        /problems/:problem_slug - A single problem page
// /how to run the python code or any other language code in your submit answer form to check the solution

//      */

//   return (
//     <div>
//       testing react

//     </div>
//   );
// }
// function AboutPage() {
//   return (
//     <>

//       <h1>About</h1>
//       <p>
//         Hello there.
//         <br />
//         How do you do?
//       </p>
//     </>
//   );
// }

// // A demo component
// function ProblemStatement(props) {
//    const title = props.title;
//   const acceptance = props.acceptance;
//   const difficulty = props.difficulty;

//   return (
//     <tr>
//       <td>{title}</td>
//       <td>{acceptance}</td>
//       <td>{difficulty}</td>
//     </tr>
//   );
// }
// export default App;
