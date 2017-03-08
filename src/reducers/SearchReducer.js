import {
  SEARCH_UPDATE,
  SEARCH_QUERY
} from '../actions/types';

const INITIAL_STATE = {
  query: '',
  location: '',
  results: null
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.payload);
  switch (action.type) {
    case SEARCH_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case SEARCH_QUERY:
      return { ...state, results: action.payload };
    default:
      return state;
  }
};