import { combineReducers } from 'redux';


import ApplicationFormReducer from './ApplicationFormReducer';
import GoogleAuthReducer from './GoogleAuthReducer';
import SearchReducer from './SearchReducer';


export default combineReducers({
  signin: GoogleAuthReducer,
  applicationForm: ApplicationFormReducer,
  searchForm: SearchReducer
});
