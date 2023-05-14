import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MyProvider from "./context/ContextApi";
import "./index.css";
const myContext = React.createContext();
ReactDOM.createRoot(document.getElementById("root")).render(
  <MyProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MyProvider>
);
