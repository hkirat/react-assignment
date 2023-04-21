import React, { useState } from "react";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Problems from "./Component/Problems";
import Signup from "./Component/Signup";
import ProblemDetails from "./Component/ProblemDetails";

import { Routes, Route } from "react-router-dom";
import Logout from "./Component/Logout";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [loginDetails, setLoginDetails] = useState({});
  const [signUpDetails, setSignUpDetails] = useState({});

  const getLoginDetails = (loginData) => {
    setLoginDetails(loginData);
    setIsLoggedIn(true);
  };

  const getSignUpDetails = (signUpData) => {
    setSignUpDetails(signUpData);
    setIsLoggedIn(true);
  };

  // console.log(isLoggedIn);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/login"
          element={<Login getLoginDetails={getLoginDetails} />}
        ></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route
          path="/signup"
          element={<Signup getSignUpDetails={getSignUpDetails} />}
        ></Route>
        <Route
          path="/problems"
          element={
            <Problems signUpDetails={signUpDetails} isLoggedIn={isLoggedIn} />
          }
        ></Route>
        <Route path="/problem/:problemId" element={<ProblemDetails />}></Route>
      </Routes>
    </div>
  );
}
