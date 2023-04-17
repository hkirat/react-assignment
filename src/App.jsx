import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



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
    return (
        <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/problemset/all/">All Problems</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <h1>Welcome to the homepage!</h1>
          </Route>
          <Route exact path="/problemset/all/">
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
                {problems.map((problem) => (
                  <tr key={problem.slug}>
                    <td>
                      <Link to={`/problems/${problem.slug}`}>
                        {problem.title}
                      </Link>
                    </td>
                    <td>{problem.acceptance}</td>
                    <td>{problem.difficulty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Route>
          <Route path="/problems/:problemSlug">
            <ProblemPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function ProblemPage() {
    const { problemSlug } = useParams();
    const problem = problems.find((p) => p.slug === problemSlug);
  
    if (!problem) {
      return <h1>Problem not found!</h1>;
    }
  
    return (
      <div>
        <h1>{problem.title}</h1>
        <h2>Difficulty: {problem.difficulty}</h2>
        <h2>Acceptance: {problem.acceptance}</h2>
      </div>
    );
  }



function ProblemStatement(props) {
    const { title, acceptance, difficulty } = props;

    return (<tr>
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
    );
}
export default App
