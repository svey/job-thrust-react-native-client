import {
  APPLICATION_UPDATE,
  APPLICATION_SEARCH
} from '../actions/types';

const INITIAL_STATE = {
  company: '', //name
  title: '',
  stage: '',
  search: '',
  location: '',
  results: null
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.payload);
  switch (action.type) {
    case APPLICATION_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case APPLICATION_SEARCH:
      return { ...state, results: action.payload };
    default:
      return state;
  }
};

/** Boilerplate Reducer **/
// const INITIAL_STATE = {};

// export default (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };
