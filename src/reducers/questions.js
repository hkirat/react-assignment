import { addCurrentProblemInDatabase } from "../actions/actionCreators/question";
import {
  ADD_ALL_QUESTIONS_FROM_DATABASE_TO_STORE,
  ADD_NEW_QUESTION_FROM_DATABASE_TO_STORE,
  DELETE_QUESTION_FROM_STORE,
  GET_ALL_QUESTIONS_FROM_DATABASE,
  UPDATE_CURRENT_QUESTION_IN_STORE,
  UPDATE_REQ_INFO_RETURNED_FROM_SERVER,
} from "../actions/actionTypes/question";

const initialProblemsState = {
  questions: [],
  currentProblem: {},
  reqStatusReturnedFromServer: "",
  reqMessageReturnedFromServer: null,
};
export default function questions(state = initialProblemsState, action) {
  switch (action.type) {
    case ADD_ALL_QUESTIONS_FROM_DATABASE_TO_STORE:
      // return [...action.questions];
      return {
        ...state,
        questions: [...action.questions],
      };
    case ADD_NEW_QUESTION_FROM_DATABASE_TO_STORE:
      // return [action.project, ...state];
      return {
        ...state,
        questions: [action.question, ...state.questions],
      };
    case UPDATE_CURRENT_QUESTION_IN_STORE:
      return {
        ...state,
        currentProblem: action.question,
      };
    case UPDATE_REQ_INFO_RETURNED_FROM_SERVER:
      return {
        ...state,
        reqStatusReturnedFromServer: action.reqStatus,
        reqMessageReturnedFromServer: action.reqMessage,
      };
    case DELETE_QUESTION_FROM_STORE:
      return {
        ...state,
        questions: [
          ...state.questions.filter((project) => {
            return project._id != action.projectID;
          }),
        ],
      };
    default:
      return state;
  }
}
