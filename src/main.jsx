import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

//
// Challenge :-
// Add routing here, routes should look like -
//   /signup - Signup page
//   /login - Login page
//   /problemset/all/ - All problems (see problems array above)
//   /problems/:problem_slug - A single problem page
