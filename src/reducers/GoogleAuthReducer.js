import {
  GOOGLE_AUTH_SUCCESS,
  GOOGLE_AUTH_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  user: null,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log('action: ', action);
  switch (action.type) {
    case GOOGLE_AUTH_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case GOOGLE_AUTH_FAIL:
      return { ...state, error: 'Google Authentication Failed.' };
    default:
      return state;
  }
};
