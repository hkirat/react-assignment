//
import "./css/style.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Layouts/Header.jsx";
import Footer from "./components/Layouts/Footer.jsx";

import Register from "./components/Pages/Register.jsx";
import Login from "./components/Pages/Login.jsx";

import Questions from "./components/Pages/Questions.jsx";
import Solution from "./components/Pages/Solution.jsx";

import Quest from "./components/QuestionsDB";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Register />} />

        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />

        <Route path="/Questions" element={<Questions questions={Quest} />} />
        <Route
          path="/questions/:num/"
          element={<Solution questions={Quest} />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
