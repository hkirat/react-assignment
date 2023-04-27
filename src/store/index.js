import logger from "redux-logger";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers/index";
let store;
export default function configureStore() {
  return (store = createStore(reducer, applyMiddleware(thunk, logger)));
}
