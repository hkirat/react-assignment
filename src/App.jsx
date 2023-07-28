import { Route, Routes, Link } from "react-router-dom";
import "./App.css";

import Home from "./routes/home";
import ProblemSet from "./routes/problemset";
import Login from "./routes/login";
import SignUp from "./routes/signup";

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problemset" element={<ProblemSet />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*">"404 Not Found"</Route>
        </Routes>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/problemset"> Problemset </Link>
      <Link to="/login"> Login </Link>
      <Link to="/signup"> Signup </Link>
    </nav>
  );
}

export default App;
