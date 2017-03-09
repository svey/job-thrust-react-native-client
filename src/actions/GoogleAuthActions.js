import { Actions } from 'react-native-router-flux';
import { GoogleSignin } from 'react-native-google-signin';

import {
  GOOGLE_AUTH_SUCCESS,
  GOOGLE_AUTH_FAIL,
} from './types';

export const googleAuthSignin = () => {
  return (dispatch) => {
    GoogleSignin.signIn()
      .then(user => googleActionSuccess(dispatch, user))
      .catch(() => googleAuthFail(dispatch));
  };
};

export const googleAuthSignout = () => {
  return (dispatch) => {
    GoogleSignin.revokeAccess()
      .then(() => GoogleSignin.signOut())
        .then(() => googleActionSuccess(dispatch, null));
  };
};

const googleAuthFail = (dispatch) => {
  dispatch({
    type: GOOGLE_AUTH_FAIL
  });
};

const googleActionSuccess = (dispatch, user) => {
  dispatch({
    type: GOOGLE_AUTH_SUCCESS,
    payload: user
  });
  
  user ? Actions.applications() : null;
};
