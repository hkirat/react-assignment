import { BrowserRouter, Route, Routes } from "react-router-dom";

import Allproblems from "./pages/Allproblems";
import Home from "./pages/Home";
import Pagenotfound from "./pages/Pagenotfound";
import Problems from "./pages/Problem";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/problem/:id" element={<Problems />} />
            <Route path="/problems/all" element={<Allproblems />} />
            <Route path="/*" element={<Pagenotfound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
