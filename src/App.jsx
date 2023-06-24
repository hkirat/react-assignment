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

    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

    return (
    <Router>
    <div>
       <Route exact path="/login" component={LoginPage}/>
       <Route exact path="/signup" component={SignupPage}/>
       <Route exact path="/problemsset/all" component={AllProblemsPage}/>
       <Route exact path="/problems/:problems_slug" component={SingleProblemPage}/>
    </div>
    </Router>
  );
}

function LoginPage() {
  return <div>Login Page</div>;
}

function SignupPage() {
  return <div>Signup Page</div>;
}

function AllProblemsPage() {
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
            <tr key={index}>
              <td>
                <Link to={`/problems/${encodeURIComponent(problem.title)}`}>{problem.title}</Link>
              </td>
              <td>{problem.acceptance}</td>
              <td>{problem.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SingleProblemPage() {
  return <div>Single Problem Page</div>;
}

export default App;

