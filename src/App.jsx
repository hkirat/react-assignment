/*
 * Temporary problems array schema
 */
import { Routes, Route } from "react-router-dom";

import Login from "./elements/login";
import SignUp from "./elements/signup";
import SingleProblem from "./elements/singleproblem";
import Problems from "./elements/problems";
import NavBar from "./elements/navbar";
import Exploler from "./elements/exploler";

function App() {
  /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */

  return (
    <>
      {/* Finish the assignment! Look at the comments in App.jsx as a starting point */}

      <main>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Exploler />}></Route>
          </Route>
          <Route path="/problems/all" element={<NavBar />}>
            <Route index element={<Problems />}></Route>
          </Route>
          {/* <Route path="/problems/all" element={<Problems />}></Route> */}
          <Route path="/problems/:id" element={<SingleProblem />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </main>
    </>
  );
}

// A demo component

export default App;
