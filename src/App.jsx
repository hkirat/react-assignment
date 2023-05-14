
import { Link, Route, Routes } from 'react-router-dom';
import ProblemsAll from './components/ProblemsAll';
import Login from './components/Login';
import Signup from './components/Signup';
import Problem from './components/Problem';




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

export default App
