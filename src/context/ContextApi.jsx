import { useState } from "react";
import { createContext } from "react";

export const myContext = createContext();
// const [problems, setProblems] = useState([]);

const initialState = {
  problems: [],
};

const MyProvider = ({ children }) => {
  return (
    <myContext.Provider value={initialState}>{children}</myContext.Provider>
  );
};

export default MyProvider;
