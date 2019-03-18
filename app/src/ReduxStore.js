import { createStore } from 'redux';
import todoReducer from './reducers/todo';

const intialState = {
  data: [],
  count: 0,
};

const store = createStore(todoReducer, intialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
