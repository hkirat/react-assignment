import {
  AUTHENTICATE_USER,
  CLEAR_AUTH_ERROR,
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  SIGNUP_FAILED,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from "../actions/actionTypes/auth";

const initialAuthState = {
  user: {},
  error: null,

  isLoggedin: false,
  isAuthenticationInProgess: false,
};

function userAuth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_START:
    case SIGNUP_START:
      return {
        ...state,
        isAuthenticationInProgess: true,
      };

    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoggedin: true,
        isAuthenticationInProgess: false,
        error: null,
      };

    case LOGIN_FAILED:
    case SIGNUP_FAILED:
      return {
        ...state,
        user: {},
        isAuthenticationInProgess: false,
        isLoggedin: false,
        error: action.error,
      };
    case AUTHENTICATE_USER:
      return {
        ...state,
        isLoggedin: true,
        user: action.user,
      };
    case CLEAR_AUTH_ERROR:
      return {
        ...state,
        error: null,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isLoggedin: false,
        user: {},
      };

    default:
      return state;
  }
}

export default userAuth;
