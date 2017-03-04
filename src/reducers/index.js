import { combineReducers } from 'redux';
import AuthReducer from "./AuthReducer";
import ApplicationFormReducer from './ApplicationFormReducer';

export default combineReducers({
  auth: AuthReducer,
  applicationForm: ApplicationFormReducer
});
