// const API_ROOT = "https://glacial-castle-79733.herokuapp.com"; //"http://localhost:8000";
const API_ROOT = "http://localhost:3000";
export const APIUrls = {
  login: () => `${API_ROOT}/v1/auth/login`,
  signup: () => `${API_ROOT}/v1/auth/register`,
  addProblemToServerDB: () => `${API_ROOT}/v1/questions`,
  getAllProblemsFromServerDB: () => ` ${API_ROOT}/v1/questions`,
  getCurrentProblemFromServerDB: (projectID) =>
    `${API_ROOT}/v1/question/?projectID=${projectID}`,
  deleteProblemFromServerDB: (projectID) => {
    return `${API_ROOT}/project/delete/?projectID=${projectID}`;
  },
  addSubmissionToQuestion: () => {
    return `${API_ROOT}/v1/user/submissions`;
  },
};
