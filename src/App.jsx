import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout/Layout.jsx';
import Home from './pages/home/Home.jsx'; 
import Login from './pages/login/Login.jsx'; 
import Signup from './pages/signup/Signup.jsx'; 
import Problemsets from './pages/problemsets/Problemsets.jsx'; 
import Problems from './pages/problems/Problems.jsx';
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

    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="problemsets" element={<Problemsets />} />
          <Route path="/problems/:id" element={<Problems />}/> 
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
