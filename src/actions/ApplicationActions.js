import axios from 'axios';
import {
  APPLICATION_UPDATE,
  APPLICATION_SEARCH
} from './types';
// INPUT is an OBJECT: { prop: , value: }
export const applicationUpdate = ({ prop, value }) => {
  return {
    type: APPLICATION_UPDATE,
    payload: { prop, value }
  };
};

export const applicationSearch = ({ query, location }) => {
    axios('http://custom-env.a2uvfbnd4f.us-west-2.elasticbeanstalk.com/echo/session')
      .then(response => console.log(response.data))
      .catch(error => console.log(error));  
};

const applicationSearchSuccess = (dispatch, response) => {
  console.log(response);
  dispatch({
    type: APPLICATION_SEARCH,
    payload: response.json()
  });
};
