import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Problems from "./pages/Problems"

function App() {

    return (
    <div>
        <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/problems" element={<Problems />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
