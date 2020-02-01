import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  REGISTER_USER_REQUEST,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS
} from "./userTypes";
import cookie from "react-cookies";
const initialState = {
  token: cookie.load("token"),
  loginLoader: false,
  loginFailure: null,
  registerLoader: false,
  registerFailure: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loginLoader: true,
        loginFailure: null,
        token: null
      };
    case LOGIN_USER_SUCCESS:
      cookie.save("token", action.payload.token, { path: "/" });
      return {
        ...state,
        token: action.payload.token,
        loginLoader: false
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loginLoader: false,
        loginFailure: action.payload
      };
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        registerLoader: true,
        registerFailure: null,
        token: null
      };
    case REGISTER_USER_SUCCESS:
      cookie.save("token", action.payload.token, { path: "/" });
      return {
        ...state,
        token: action.payload.token,
        registerLoader: false
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        registerLoader: false,
        registerFailure: action.payload
      };

    case LOGOUT_USER:
      cookie.remove("token", { path: "/" });
      return {
        ...state,
        token: null,
        loginFailure: null,
        registerFailure:null
      };
    default:
      return state;
  }
};

export default userReducer;
