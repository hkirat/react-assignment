import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/login">
              </Route>
              <Route path="/signup">
              </Route>
              <Route exact path="/problemset/all">
                <table>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Acceptance</th>
                      <th>Difficulty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {problems.map(problem => (
                      <ProblemStatement
                        key={problem.title}
                        title={problem.title}
                        acceptance={problem.acceptance}
                        difficulty={problem.difficulty}
                      />
                    ))}
                  </tbody>
                </table>
              </Route>
              <Route path="/problems/:problem_slug">
                {/* Render a single problem page component here */}
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
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
export default App
