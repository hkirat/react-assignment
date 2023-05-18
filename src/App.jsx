import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"; 
/*
 * Temporary problems array schema
 */
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
    

    /* Added routing here -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */
    

    return (
       <BrowserRouter>
       <div>
       <nav>
       <ul>
       <li>
         <Link to="/login">Login</Link>
       </li>
       <li>
          <Link to="/signup">Signup</Link>
       </li>
       <li>
          <Link to="/problemset/all">All Problems</Link>
        </li>
        </ul>
        </nav>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/problemset/all" component={AllProblems} />
          <Route path="/problems/:problem_slug" component={SingleProblem} />
        </Switch>
        </div>
        </BrowserRouter>
  );
}

function Login() {
  return <div>Login page</div>;
}
function Signup() {
  return <div>Signup page</div>;
}
function AllProblems() {
  return (
    <div>
      <h1>All Problems</h1>
      <table>
      <thead>
       <tr>
       <th>Title</th>
       <th>Acceptance</th>
       <th>Difficulty</th>
       </tr>
       </thead>
       <tbody>
       {problems.map((problem, index) => (
       <ProblemStatement key={index} {...problem} />
       ))}
       </tbody>
       </table>
       </div>
  );
}
function SingleProblem({ match }) {
  const { problem_slug } = match.params;
  // Fetch problem details based on problem_slug

  return (
   <div>
   <h1>Problem Details</h1>
   <p>Problem Slug: {problem_slug}</p>
   {/* Render problem details */}
    </div>
  );
}
function ProblemStatement({ title, acceptance, difficulty }) {
  return (
   <tr>
   <td>{title}</td>
   <td>{acceptance}</td>
   <td>{difficulty}</td>
    </tr>
  );
}

export default App;
       
