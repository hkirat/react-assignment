import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';

const problems = [{
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%"
}, {
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
        return (
            <Router>
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
                      <Link to="/problemset/all">All problems</Link>
                    </li>
                  </ul>
                </nav>
        
                <Switch>
                  <Route path="/login">
                    <h1>Login page</h1>
                  </Route>
                  <Route path="/signup">
                    <h1>Signup page</h1>
                  </Route>
                  <Route path="/problemset/all">
                    <h1>All problems</h1>
                    <table>
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Acceptance</th>
                          <th>Difficulty</th>
                        </tr>
                      </thead>
                      <tbody>
                        {problems.map((problem) => (
                          <ProblemStatement key={problem.title} {...problem} />
                        ))}
                      </tbody>
                    </table>
                  </Route>
                  <Route path="/problems/:problem_slug">
                    <SingleProblem />
                  </Route>
                </Switch>
              </div>
            </Router>
          );
}

// A demo component
function ProblemStatement(props) {
    const title = props.title;
    const acceptance = props.acceptance;
    const difficulty = props.difficulty;

    return <tr>
        <td>
            {title}
        </td>
        <td>
            {acceptance}
        </td>
        <td>
            {difficulty}
        </td>
    </tr>
}
function SingleProblem() {
    const { problem_slug } = useParams();
    const problem = problems.find((p) => p.title.toLowerCase().replace(/\s/g, '-') === problem_slug);
  
    if (!problem) {
      return <h1>Problem not found</h1>;
    }
  
    return (
      <div>
        <h1>{problem.title}</h1>
        <p>Difficulty: {problem.difficulty}</p>
        <p>Acceptance: {problem.acceptance}</p>
      </div>
    );
  }
export default App
