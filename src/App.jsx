import React,{ useEffect,useState } from 'react';
import { BrowserRouter as Router, Routes,Route,useNavigate } from 'react-router-dom';
//import Login from './Login'; 
import Signup from './components/Signup'; 
import Home from './components/Home';
import AuthContext from './AuthContext';
import Layout from './components/Layout';
import Login from './components/Login'
import Question from './components/Question'

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
    const [authState, setAuthState] = useState({
    isLoggedIn: false,
    token: null
    });
       
    return (
    <AuthContext.Provider value={{ ...authState, setAuthState }}>
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/questions/:id" element={<Question />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </Layout>
        </Router>
    </AuthContext.Provider>
         
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
