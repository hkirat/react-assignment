import React, { useState,useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar, DarkNavBar } from "./components/NavBar";
import { ProblemList, DarkProblemList } from "./Components/ProblemList";
import { ProblemStatement } from "./Components/ProblemStatement";
import problems from "./data/problemList";
import {SignUpView,DarkSignUpView} from "./Components/SignUpView";

function App() {
  /* Add routing here, routes look like -
       /login - Login page
       /signup - Signup page
       /problemset/all/ - All problems (see problems array above)
       /problems/:problem_slug - A single problem page
     */
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTheme((prevTheme) => !prevTheme);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {theme ? <NavBar /> : <DarkNavBar />}
      <Routes>
        <Route exact path="/" element={theme? <DarkProblemList problems={problems}/> : <ProblemList problems={problems} />} />
        <Route path="/login" element={theme? <DarkSignUpView /> : <SignUpView />} />
        <Route path="/problems/:_id" element={<ProblemStatement />} />
      </Routes>
    </div>
  );
}

export default App;
