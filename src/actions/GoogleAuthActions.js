import { Actions } from 'react-native-router-flux';
import { GoogleSignin } from 'react-native-google-signin';

import {
  GOOGLE_AUTH_SUCCESS,
  GOOGLE_AUTH_FAIL,
  GOOGLE_AUTH
} from './types';

export const googleAuth = () => {
  return (dispatch) => {
    dispatch({ type: GOOGLE_AUTH });

    GoogleSignin.signIn()
      .then(user => googleAuthSuccess(dispatch, user))
      .catch(() => googleAuthFail(dispatch));
  };
};

const googleAuthFail = (dispatch) => {
  dispatch({
    type: GOOGLE_AUTH_FAIL
  });
};

const googleAuthSuccess = (dispatch, user) => {
  dispatch({
    type: GOOGLE_AUTH_SUCCESS,
    payload: user
  });

  Actions.applications();
};
