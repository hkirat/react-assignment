import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Home from './Home'; // Your other components
import Header from './Header';
import Problems from './Problems';
import ProblemDetails from './ProblemDetails';

function App() {

    /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

    return (
        <>
        <Header></Header>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        <Route path="signup" element={<SignUp />} />
        <Route path="problems" element={<Problems />} />
        <Route path="/problem/:id" element={<ProblemDetails/>} />
        </Routes>
      </BrowserRouter>
      </>
  )
}
export default App
