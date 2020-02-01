import { createStore,combineReducers, applyMiddleware  } from 'redux';
import userReducer from './user/userReducers';
import questionReducer from './question/questionReducers';
const thunkMiddleware = require('redux-thunk').default

const rootReducer = combineReducers({
    user:userReducer,
    question:questionReducer
  })
  
// const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

// export default store;

const makeStore = (initialState, options) => {
  return createStore(rootReducer,initialState);
};

export default makeStore;