/*
 * Temporary problems array schema
 */
import {BrowserRouter, Route,Routes } from "react-router-dom";
import  {SignUp,LogIn,Problems,Problem}  from "./pages";

const problems = [{
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%"
},{
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "412%"
},
    {
        title: "202. Happy Number",
        difficulty: "Easy",
        acceptance: "54.9%"
    },
    {
        title: "203. Remove Linked List Elements",
        difficulty: "Hard",
        acceptance: "42%"
    }];


function App() {

    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

    return (
    <BrowserRouter>
        <Routes>
        <Route path = "/" element= { <SignUp/> }  />
        <Route path = "/signup" element= { <SignUp/> }  />
        <Route path = "/login" element = { <LogIn /> } />
        <Route path = "/problems/all" element = { <Problems/> } />
        <Route path = "/problem/:id" element = { <Problem/> } />
    </Routes>
    </BrowserRouter>
  )
}

// A demo component
// function ProblemStatement(props) {
//     const title = props.title;
//     const acceptance = props.acceptance;
//     const difficulty = props.difficulty;

//     return <tr>
//         <td>
//             {title}
//         </td>
//         <td>
//             {acceptance}
//         </td>
//         <td>
//             {difficulty}
//         </td>
//     </tr>
// }
export default App
