import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_REQUEST
} from "./userTypes";
import API_URL from "../helpers/API_URL";
import validateEmail from "../helpers/validateEmail";
import Router from "next/router";
import axios from "axios";

const loginUserRequest = () => ({
  type: LOGIN_USER_REQUEST
});

const loginUserSuccess = res => ({
  type: LOGIN_USER_SUCCESS,
  payload: res
});

const loginUserFailure = err => ({
  type: LOGIN_USER_FAILURE,
  payload: err
});

export const logoutUser = () => {
  Router.push("/")
  return {
    type: LOGOUT_USER
  };
};

export const loginUser = (data, message) => {
  let { email, password } = data;

  email =
    typeof email === "string" && validateEmail(email) ? email.trim() : false;
  password =
    typeof password === "string" && password.trim().length > 0
      ? password
      : false;
  if (!(email && password)) {
    return function(dispatch) {
      if (!email) {
        message.error("Invalid Email");
        dispatch(registerUserFailure("Invalid Email"));
      } else if (password) {
        message.error("Invalid Password must be more than 5 characters");
        dispatch(registerUserFailure("Invalid Password"));
      }
    };
  }
  return async function(dispatch) {
    try {
      dispatch(loginUserRequest());
      let res = await axios.post(`${API_URL}user/login`, data);
      res = res.data;
       Router.replace("/");

       dispatch(loginUserSuccess(res));
    } catch (error) {
      console.log(error);
      message.error(error.response.data.message);
       dispatch(loginUserFailure(error.message));
    }
  };
};

const registerUserRequest = () => ({
  type: REGISTER_USER_REQUEST
});

const registerUserSuccess = res => ({
  type: REGISTER_USER_SUCCESS,
  payload: res
});

const registerUserFailure = err => ({
  type: REGISTER_USER_FAILURE,
  payload: err
});

export const registerUser = (data, history, message) => {
  let { displayName, email, password } = data;
  displayName =
    typeof displayName === "string" && displayName.trim().length > 0
      ? displayName.trim()
      : false;
  email =
    typeof email === "string" && validateEmail(email) ? email.trim() : false;
  password =
    typeof password === "string" && password.trim().length > 0
      ? password
      : false;
  if (!(displayName && email && password)) {
    return function(dispatch) {
      if (!displayName) {
        message.error("Invalid Display Name");
        dispatch(registerUserFailure("Invalid Display Name"));
      } else if (!email) {
        message.error("Invalid Email");
        dispatch(registerUserFailure("Invalid Email"));
      } else if (password) {
        message.error("Invalid Password must be more than 5 characters");
        dispatch(registerUserFailure("Invalid Password"));
      }
    };
  }
  return async function(dispatch) {
    try {
      dispatch(registerUserRequest());
      let response = await axios.post(`${API_URL}user/register`, {
        displayName,
        email,
        password
      });

      response = response.data;
      dispatch(registerUserSuccess(response));

      Router.push("/");
    } catch (error) {
      message.error(error.response.data.message);
      dispatch(registerUserFailure(error.message));
    }
  };
};
