import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProblemPage from "./pages/ProblemPage";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/problem/all" element={<Home />} />
        <Route path="problem/problemId" element={<ProblemPage />} />
        <Route path="signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
