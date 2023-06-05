import problems from './problemList.js'
import Login from "./components/login.jsx";
import Signup from "./components/signup.jsx";
import Problem from "./components/problem.jsx";
import ProblemSet from "./components/problemSet.jsx";

function App() {

    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

    console.log(problems)
    return (
    <div>
        Finish the assignment! Look at the comments in App.jsx as a starting point
        <Login/>
        <Signup/>
        <ProblemSet/>
        <Problem/>
    </div>
  )
}

export default App
