import { combineReducers } from 'redux';
import commentsReducer from './comment';

const rootReducer = combineReducers({
  comments: commentsReducer
});

export default rootReducer;
