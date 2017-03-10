import axios from 'axios';
import {
  APPLICATION_UPDATE,
  APPLICATION_GET
} from './types';
// INPUT is an OBJECT: { prop: , value: }
export const applicationUpdate = ({ prop, value }) => {
  return {
    type: APPLICATION_UPDATE,
    payload: { prop, value }
  };
};

export const applicationGetAll = (id) => {
  const url = 'http://custom-env.a2uvfbnd4f.us-west-2.elasticbeanstalk.com/api/application';
  return (dispatch) => {
    instance(url, id).get('')
      .then((response) => applicationGetAllSuccess(dispatch, response));    
  };
};

const instance = (url, id) => axios.create({
  baseURL: url,
  headers: { 'Job-Thrust-Native': id } //move to SearchResult make job-thrust-native value === googleID
});

const applicationGetAllSuccess = (dispatch, response) => {
  dispatch({
    type: APPLICATION_GET,
    payload: response.data
  });
};

