import { Router } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Problems from './components/Problems';
/*
 * Temporary problems array schema
 */

function App() {

    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */
    let Component;
    switch (window.location.pathname) {
        case '/': Component = Home
            break
        case '/about': Component = About
            break
        case '/problems':Component = Problems

    }
    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center h-[90vh]">
                <div className="flex md:max-w-5xl">
                    <Component />
                </div>

            </div>
        </div>
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
