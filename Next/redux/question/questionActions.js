import {
  GET_QUESTIONS_FAILURE,
  GET_QUESTIONS_REQUEST,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTION_DESCRIPTION_FAILURE,
  GET_QUESTION_DESCRIPTION_REQUEST,
  GET_QUESTION_DESCRIPTION_SUCCESS,
  ASK_QUESTION_FAILURE,
  ASK_QUESTION_SUCCESS,
  ASK_QUESTION_REQUEST,
  ADD_REPLY_FAILURE,
  ADD_REPLY_SUCCESS,
  ADD_REPLY_REQUEST,
  EDIT_REPLY
} from "./questionTypes";
import { message } from "antd";
import API_URL from "../helpers/API_URL";
import axios from "axios";
import { getHeaders } from "../helpers/getHeaders";
import React from "react";
import Router from "next/router";
const getQuestionRequest = () => ({
  type: GET_QUESTIONS_REQUEST
});
const getQuestionSuccess = res => ({
  type: GET_QUESTIONS_SUCCESS,
  payload: res
});
const getQuestionFailure = err => ({
  type: GET_QUESTIONS_FAILURE,
  payload: err
});

const getCurrentQuestionReq = () => ({
  type: GET_QUESTION_DESCRIPTION_REQUEST
});

const getCurrentQuestionSuccess = res => ({
  type: GET_QUESTION_DESCRIPTION_SUCCESS,
  payload: res
});

const getCurrentQuestionFailure = err => ({
  type: GET_QUESTION_DESCRIPTION_FAILURE,
  payload: err
});
const askQuestionRequest = () => ({
  type: ASK_QUESTION_REQUEST
});
const askQuestionSuccess = () => ({
  type: ASK_QUESTION_SUCCESS
});
const askQuestionFailure = () => ({
  type: ASK_QUESTION_FAILURE
});

const addReplyRequest = () => ({
  type: ADD_REPLY_REQUEST
});
const addReplySuccess = () => ({
  type: ADD_REPLY_SUCCESS
});
const addReplyFailure = () => ({
  type: ADD_REPLY_FAILURE
});
const editReply = res => ({
  type: EDIT_REPLY,
  payload: res
});

export const getQuestions = (search, pageNo, pageSize) => {
  search = typeof search === "string" ? search : "";
  return async function(dispatch) {
    dispatch(getQuestionRequest());
    try {
      let response = await axios.get(
        `${API_URL}question/search?search=${search}`
      );
      response = response.data;

      return dispatch(getQuestionSuccess(response));
    } catch (error) {
      message.error(error.response.data.message);
      return dispatch(getQuestionFailure(error.message));
    }
  };
};

export const getQuestionById = id => {
  console.log("hii");
  id = typeof id === "string" && id.length > 0 ? id : false;
  if (!id) {
    return function(dispatch) {
      message.error("Invalid ID");
      dispatch(getCurrentQuestionFailure("Invalid ID"));
    };
  }
  return async function(dispatch) {
    try {
      dispatch(getCurrentQuestionReq());
      let response = await axios.get(`${API_URL}question/search/${id}`);
      response = response.data;
      return dispatch(getCurrentQuestionSuccess(response));
    } catch (error) {
      console.log(error);
      message.error(error.response.data.message);
      dispatch(getCurrentQuestionFailure(error.message));
      return response;
    }
  };
};

export const voteQuestion = (id, type, history) => {
  console.log(id, type);
  id = typeof id === "string" && id.length > 0 ? id : false;
  type = typeof type === "boolean" ? type.toString() : false;
  if (!id || !type) {
    return function(dispatch) {
      message.error("Missing Required Fields");
      // dispatch(getCurrentQuestionFailure("Missing Required Fields"));
    };
  }
  const types = {
    true: "upvote",
    false: "downvote"
  };
  return function(dispatch) {
    axios
      .post(`${API_URL}question/${types[type]}/${id}`, {}, getHeaders())
      .then(response => {
        const res = response.data;
        dispatch(getCurrentQuestionSuccess(res));
      })
      .catch(error => {
        console.log(error);
        if (error.response.status === 401) {
          Router.push("/login");
        }
        message.error(error.response.data.message);
      });
  };
};

export const askQuestion = data => {
  data.title =
    typeof data.title === "string" && data.title.trim().length > 0
      ? data.title.trim()
      : false;
  data.description =
    typeof data.description === "string" && data.description.trim().length > 0
      ? data.description.trim()
      : false;
  data.tags =
    Array.isArray(data.tags) && data.tags.length > 0 ? data.tags : false;
  if (!(data.title && data.description && data.tags)) {
    return function(dispatch) {
      dispatch(askQuestionFailure());
    };
  }

  const body = {
    title: data.title,
    description: data.description,
    tags: data.tags
  };
  return async function(dispatch) {
    try {
      dispatch(askQuestionRequest());
      const response = await axios.post(
        `${API_URL}question/ask`,
        body,
        getHeaders()
      );
      dispatch(askQuestionSuccess());
      await getQuestions()(dispatch);
    } catch (error) {
      console.log(error);
      message.error(error.response.data.message);
      dispatch(askQuestionFailure());
    }
  };
};

export const voteReply = (id, type, history) => {
  id = typeof id === "string" && id.length > 0 ? id : false;
  type = typeof type === "boolean" ? type.toString() : false;
  if (!id || !type) {
    return function(dispatch) {
      message.error("Missing Required Fields");
      // dispatch(getCurrentQuestionFailure("Missing Required Fields"));
    };
  }
  const types = {
    true: "upvote",
    false: "downvote"
  };
  return async function(dispatch) {
    try {
      let response = await axios.post(
        `${API_URL}reply/${types[type]}/${id}`,
        {},
        getHeaders()
      );
      response = response.data;
      dispatch(editReply(response));
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        Router.push("/login");
      }
      message.error(error.response.data.message);
    }
  };
};

export const addReply = data => {
  data.text =
    typeof data.text === "string" && data.text.trim().length > 0
      ? data.text.trim()
      : false;
  data.questionId =
    typeof data.questionId === "string" && data.questionId.trim().length > 0
      ? data.questionId.trim()
      : false;

  if (!(data.text && data.questionId)) {
    return function(dispatch) {
      message.error("Missing Required Fields");
      dispatch(askReplyFailure());
    };
  }

  const body = {
    text: data.text,
    questionId: data.questionId
  };
  return async function(dispatch) {
    try {
      dispatch(addReplyRequest());
      await axios.post(`${API_URL}reply/`, body, getHeaders());
      message.success("Reply Added Successfully");
      dispatch(addReplySuccess());
      getQuestionById(data.questionId)(dispatch);
    } catch (error) {
      console.log(error);
      message.error(error.response.data.message);
      dispatch(addReplyFailure());
    }
  };
};
