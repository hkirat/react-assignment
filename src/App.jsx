import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Problems from "./pages/Problems";
import Problem from "./components/Problem";

function App() {
  /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems 
       /problems/:problem_slug - A single problem page              */

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              Finish the assignment! Look at the comments in App.jsx as a
              starting point
            </div>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="problems/all" element={<Problems />} />
        <Route path="problems/:id" element={<Problem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
