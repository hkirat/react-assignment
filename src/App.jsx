/*
 * Temporary problems array schema
 */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Allproblems  from "./Allproblems";
import Singleproblem from "./Singleproblem";




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
        <Switch>
            <Route exact path="/login">
             <Login />
            </Route>
            <Route exact path="/signup">
            <Signup />
            </Route>
            <Route exact path="/problemset/all/">
            < Allproblems />
            </Route>
            <Route exact path="/singleproblem/:problem_slug">
            <Singleproblem />
            </Route>
        </Switch>
    </Router>

  )
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
