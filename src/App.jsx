import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout/Layout.jsx';
import Home from './pages/home/Home.jsx'; 
import Login from './pages/login/Login.jsx'; 
import Signup from './pages/signup/Signup.jsx'; 
import Problemsets from './pages/Problemsets.jsx'; 
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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="problemsets" element={<Problemsets />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
