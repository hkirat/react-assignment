import { APIUrls } from "../../helpers/urls";
import {
  ADD_ALL_QUESTIONS_FROM_DATABASE_TO_STORE,
  ADD_NEW_QUESTION_FROM_DATABASE_TO_STORE,
  ADD_QUESTION_TO_DATABASE,
  UPDATE_CURRENT_QUESTION_IN_STORE,
  ADD_ISSUE_TO_QUESTION_IN_DATABASE,
  UPDATE_REQ_INFO_RETURNED_FROM_SERVER,
  DELETE_QUESTION_FROM_STORE,
  ADD_SUBMISSION_TO_QUESTION,
} from "../actionTypes/question";
import { getFormBody, getJsonBody } from "../../helpers/utils";

export function getAllProblemsFromDatabase() {
  return (dispatch) => {
    let url = APIUrls.getAllProblemsFromServerDB();
    let jwtToken = localStorage.getItem("token");
    fetch(url, {
      headers: {
        Authorization: jwtToken,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(addAllProblemsFromDatabaseToStore(data.questions));
      });
  };
}
export function addAllProblemsFromDatabaseToStore(questions) {
  return {
    type: ADD_ALL_QUESTIONS_FROM_DATABASE_TO_STORE,
    questions,
  };
}

// questionAuthor has not been provided to the fn as on the server we will get it from token
export function addProblemToDatabase({ title, description, difficulty }) {
  return (dispatch) => {
    let url = APIUrls.addProblemToServerDB();
    let jwtToken = localStorage.getItem("token");
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: jwtToken,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: getJsonBody({ title, description, difficulty }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(updateReqInfoReturnedFromServer(data.success, data.message));
        if (data.success)
          dispatch(addNewProblemFromDatabaseToStore(data.question));
      });
  };
}
export function addNewProblemFromDatabaseToStore(question) {
  return {
    type: ADD_NEW_QUESTION_FROM_DATABASE_TO_STORE,
    question,
  };
}

// set current question in questions reducer
export function updateCurrentProblemInStore(question) {
  return {
    type: UPDATE_CURRENT_QUESTION_IN_STORE,
    question,
  };
  // delete above fn
}
export function getCurrentProblemFromDatabase(questionID) {
  return function (dispatch) {
    const url = APIUrls.getCurrentProblemFromServerDB(questionID);
    let jwtToken = localStorage.getItem("token");
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: jwtToken,
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) dispatch(updateCurrentProblemInStore(data.question));
      });
  };
  return {
    type: "ab",
  };
}

//  actions related to issues

// THIS FN MIGHT HAVE BEEN  NAMED WRONG
export function addCurrentProblemInDatabase(issue, questionID) {
  return (dispatch) => {
    let url = APIUrls.sendIssueToAddToProblem();
    let jwtToken = localStorage.getItem("token");
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: jwtToken,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: getFormBody({ ...issue, questionID }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(updateReqInfoReturnedFromServer(data.success, data.message));
        if (data.success) {
          if (data.success)
            dispatch(updateCurrentProblemInStore(data.question));
        }
      });
  };
}
export function deleteProblemFromDatabase(questionID) {
  return (dispatch) => {
    let jwtToken = localStorage.getItem("token");
    const url = APIUrls.deleteProblemFromServerDB(questionID);
    fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: jwtToken,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: getFormBody({ questionID }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(deleteProblemFromStore(questionID));
        }
      });
  };
}
export function deleteProblemFromStore(questionID) {
  return {
    type: DELETE_QUESTION_FROM_STORE,
    questionID,
  };
}

// update issue document on the server
export function updateIssueInDatabase(issueAssignee, issueID) {
  return (dispatch) => {
    let jwtToken = localStorage.getItem("token");
    let url = APIUrls.updateAssigneeOnIssue();
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: jwtToken,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: getFormBody({ issueAssignee, issueID }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(updateCurrentProblemInStore(data.question));
      });
  };
}

export function updateStatusOfIssueOnserver(issueStatus, issueID) {
  return (dispatch) => {
    let jwtToken = localStorage.getItem("token");
    let url = APIUrls.updateStatusOnIssue();
    fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: jwtToken,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: getFormBody({ issueStatus, issueID }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(updateCurrentProblemInStore(data.question));
      });
  };
}
// action CREATOR to update  reqStatusReturnedFromServer: "", reqMessageReturnedFromServer: null,

export function updateReqInfoReturnedFromServer(
  reqStatus = false,
  reqMessage = "dummy message"
) {
  return {
    type: UPDATE_REQ_INFO_RETURNED_FROM_SERVER,
    reqStatus,
    reqMessage,
  };
}

export function addSubMissionToAQuestion(questionId, code) {
  return (dispatch) => {
    let jwtToken = localStorage.getItem("token");
    let url = APIUrls.addSubmissionToQuestion();
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: jwtToken,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: getJsonBody({ _id: questionId, code }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(updateCurrentProblemInStore(data.question));
      });
  };
}
