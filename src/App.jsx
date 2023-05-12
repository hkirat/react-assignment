/*
 * Temporary problems array schema
 */
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './component/login';
import Navbar from './component/navbar';
import Problumset from './component/problumset';
import Singup from './component/singup';
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
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navbar/>} >
                <Route index  element ={'home'}/>
                <Route path='/login' element={<Login/>} />
                <Route path='/singup' element={<Singup/>} />
                <Route path='problumset/all' element={<Problumset/>} />
                <Route path='problum/:id' element={'singleproblum'} />



            </Route>
        </Routes>
        
        </BrowserRouter>
       
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
