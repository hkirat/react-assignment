import React,{ useEffect } from 'react';
import { BrowserRouter as Router, Routes,Route,useNavigate } from 'react-router-dom';
import Login from './Login'; 
import Signup from './Signup'; 
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

function Home() {
    const navigate = useNavigate();
    
    useEffect(() => {
        // replace this with your own logic to check if the user is logged in
        const isLoggedIn = false;
    
        if (!isLoggedIn) {
        navigate('/login');
        }
    }, [navigate]);
    
    return <div>Home</div>;
    }

function App() {

    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

       
       return (
         <Router>
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/login" element={<Login />} />
             <Route path="/signup" element={<Signup />} />
           </Routes>
         </Router>
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
