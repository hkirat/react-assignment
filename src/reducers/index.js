import { combineReducers } from "redux";
import userAuth from "./auth";
import questions from "./questions";

// import projects from "./projects";
export default combineReducers({
  userAuth,
  questions,
});
