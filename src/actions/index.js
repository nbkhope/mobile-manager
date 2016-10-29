import firebase from 'firebase';

// Import action types
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS
} from './types';

export const emailChanged = (email) => {
  return {
    type: EMAIL_CHANGED,
    payload: email
  };
};

export const passwordChanged = (password) => {
  return {
    type: PASSWORD_CHANGED,
    payload: password
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);

        loginUserSuccess(dispatch, user);
      })
      .catch(error => {
        console.log(error);

        // If there was a problem signing in, actually let us create a new
        // account with that information
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => {
            // logs the user in after creating new account
            loginUserSuccess(dispatch, user);
          });
      })
      ;
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};
