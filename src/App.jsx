import { Routes, Route } from "react-router-dom";

import Login from "./elements/login";
import SignUp from "./elements/signup";
import SingleProblem from "./elements/singleproblem";
import Problems from "./elements/problems";
import NavBar from "./elements/navbar";
import Explorer from "./elements/explorer";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Explorer />}></Route>
          </Route>
          <Route path="/problems" element={<NavBar />}>
            <Route index element={<Problems />}></Route>
          </Route>
          <Route path="/problem/:id" element={<SingleProblem />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </main>
    </>
  );
}

// A demo component

export default App;
