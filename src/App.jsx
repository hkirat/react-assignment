import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';

const problems = [
  {
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%"
  },
  {
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
  }
];

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
              <Link to="/problemset/all/">All Problems</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/problemset/all/" element={<ProblemSetPage />} />
          <Route path="/problems/:problem_slug" element={<ProblemPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
    </div>
  );
}

function SignupPage() {
  return (
    <div>
      <h1>Signup Page</h1>
    </div>
  );
}

function ProblemSetPage() {
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

function ProblemPage() {
  const { problem_slug } = useParams();

  // Find the problem based on the slug
  const problem = problems.find(
    problem => problem.title.toLowerCase().replace(/\s/g, '-') === problem_slug
  );

  if (!problem) {
    return <h2>Problem not found!</h2>;
  }

  return (
    <div>
      <h2>{problem.title}</h2>
      <p>Difficulty: {problem.difficulty}</p>
      <p>Acceptance: {problem.acceptance}</p>
    </div>
  );
}

function ProblemStatement(props) {
  const { title, acceptance, difficulty } = props;

  return (
    <tr>
      <td>{title}</td>
      <td>{acceptance}</td>
      <td>{difficulty}</td>
    </tr>
  );
}

export default App;
