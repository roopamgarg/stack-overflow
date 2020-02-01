const {
  GET_QUESTIONS_FAILURE,
  GET_QUESTIONS_REQUEST,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTION_DESCRIPTION_FAILURE,
  GET_QUESTION_DESCRIPTION_REQUEST,
  GET_QUESTION_DESCRIPTION_SUCCESS,
  ASK_QUESTION_REQUEST,
  ASK_QUESTION_SUCCESS,
  ASK_QUESTION_FAILURE,
  ADD_REPLY_REQUEST,
  ADD_REPLY_SUCCESS,
  ADD_REPLY_FAILURE,
  EDIT_REPLY
} = require("./questionTypes");

const initialState = {
  questions: [],
  questionsLoader: false,
  getQuestionsFailure: null,
  currentQuestion: {},
  currentQuestionLoader: false,
  currentQuestionFailure: null,
  askQuestionLoader: false,
  addQuestionLoader: false
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS_REQUEST:
      return {
        ...state,
        questionsLoader: true,
        getQuestionsFailure: null
      };
    case GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload,
        questionsLoader: false,
        getQuestionsFailure: null
      };
    case GET_QUESTIONS_FAILURE:
      return {
        ...state,
        questionsLoader: false,
        getQuestionsFailure: action.payload
      };
    case GET_QUESTION_DESCRIPTION_REQUEST:
      return {
        ...state,
        currentQuestionLoader: true,
        currentQuestionFailure: null
      };
    case GET_QUESTION_DESCRIPTION_SUCCESS:
      return {
        ...state,
        currentQuestionLoader: false,
        currentQuestion: action.payload
      };
    case GET_QUESTION_DESCRIPTION_FAILURE:
      return {
        ...state,
        currentQuestionLoader: false,
        currentQuestionFailure: action.payload
      };
    case ASK_QUESTION_REQUEST:
      return {
        ...state,
        askQuestionLoader: true
      };
    case ASK_QUESTION_SUCCESS:
      return {
        ...state,
        askQuestionLoader: false
      };
    case ASK_QUESTION_FAILURE:
      return {
        ...state,
        askQuestionLoader: false
      };
    case ADD_REPLY_REQUEST:
      return {
        ...state,
        addQuestionLoader: true
      };
    case ADD_REPLY_SUCCESS:
      return {
        ...state,
        addQuestionLoader: false
      };
    case ADD_REPLY_FAILURE:
      return {
        ...state,
        addQuestionLoader: false
      };
    case EDIT_REPLY:
      const index = state.currentQuestion.replies.findIndex(
        ({ _id }) => _id === action.payload._id
      );
      console.log(state);
      let question = state.currentQuestion;
      question.replies[index] = action.payload;
      return {
        ...state,
        currentQuestion: { ...question }
      };

    default:
      return state;
  }
};

export default questionReducer;
