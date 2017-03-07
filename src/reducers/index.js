import { combineReducers } from 'redux';
import ApplicationFormReducer from './ApplicationFormReducer';
import GoogleAuthReducer from './GoogleAuthReducer';

export default combineReducers({
  signin: GoogleAuthReducer,
  applicationForm: ApplicationFormReducer
});
