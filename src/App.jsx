import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Problems from "./pages/Problems";
import Problem from "./components/Problem";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems 
       /problems/:problem_slug - A single problem page              */

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="problems/all" element={<Problems />} />
        <Route path="problems/:id" element={<Problem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
