import {
  APPLICATION_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  company: '', //name
  title: '',
  stage: ''

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APPLICATION_UPDATE:
      // action.payload === { prop: 'company', value: 'JobThrust' }
      return { ...state, [action.payload.prop]: action.payload.value };
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
