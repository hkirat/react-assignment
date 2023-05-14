/*
 * Temporary problems array schema
 */
import { Link, Route, Routes } from 'react-router-dom';
import ProblemsAll from './components/ProblemsAll';
import Login from './components/Login';
import Signup from './components/Signup';
import Problem from './components/Problem';

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

    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

    return (
        <>

        <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/login">Home</Link>

            </li>
            <li>
            <Link to="/login">Login</Link>
            </li>
            <li>
            <Link to="/signup">Signup</Link>
            </li>
        </ul>

        </nav>
        <Routes>
                <Route path="/" element={<ProblemsAll />} />
                <Route path="/problems/:problem_slug" element={<Problem />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />

        </Routes>
        </>

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
