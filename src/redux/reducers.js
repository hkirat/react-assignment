// reducers.js
import { updateId,UPDATE_ID } from "./Action";
const initialState = {
    id: ''
  };
  
  export const idReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_ID:
        return {
          ...state,
          id: action.payload
        };
      default:
        return state;
    }
  };
  