import axios from 'axios';
import {
  SEARCH_UPDATE,
  SEARCH_QUERY
} from './types';

export const searchUpdate = ({ prop, value }) => {
  return {
    type: SEARCH_UPDATE,
    payload: { prop, value }
  };
};

export const searchQuery = ({ query, location }) => {
  return (dispatch) => {
    instance('', {
      params: {
        publisher: '5024495540845813', // TODO: HIDE THIS!!!
        l: location,
        q: query,
        limit: 10,
        format: 'json',
        v: '2'
      }
    })
      .then(response => searchQuerySuccess(dispatch, response))
      .catch(error => console.log(error));      
  };
};

const instance = axios.create({
  baseURL: 'http://api.indeed.com/ads/apisearch?callback=?',
  headers: { 'Job-Thrust-Native': 'Launch' }
});

const searchQuerySuccess = (dispatch, response) => {
  dispatch({
    type: SEARCH_QUERY,
    payload: response.data.results
  });
};
