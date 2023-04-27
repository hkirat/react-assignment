import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Problems from './pages/Problems';
import Solution from './pages/Solution';
import { useParams } from 'react-router-dom';


function App() {

    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */
    
    return (
        <Router>
            <div className="">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/problems" element={<Problems />} />
                    <Route path="/problems/:problem_slug" element={<Solution  problem={problem}/> } />
                </Routes>
            </div>
        </Router>
        
    )
}
const problem = [{
    id: 1,
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%"
},
{
    id: 2,
    title: "202. Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%"
},
{
    id: 3,
    title: "203. Remove Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%"
}];

const problems2 = [{
    id: 10,
    title: "301. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%"
},{
    id: 2,
    title: "301. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "412%"
},
    {
        id: 3,
        title: "302. Happy Number",
        difficulty: "Easy",
        acceptance: "54.9%"
    },
    {
        id: 4,
        title: "303. Remove Linked List Elements",
        difficulty: "Hard",
        acceptance: "42%"
    }];

export default App
