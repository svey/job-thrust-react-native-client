import {
  GOOGLE_AUTH_SUCCESS,
  GOOGLE_AUTH_FAIL,
  GOOGLE_AUTH
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  user: null,
  loading: false,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  console.log('action: ', action);
  switch (action.type) {
    case GOOGLE_AUTH_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload.name, email: action.payload.email };
    case GOOGLE_AUTH_FAIL:
      return { ...state, error: 'Google Authentication Failed.' };
    case GOOGLE_AUTH:
      return { ...state, loading: true, error: '' };
    default:
      return state;
  }
};
