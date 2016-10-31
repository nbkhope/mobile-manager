import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  // Get access to the currently authenticated user
  const { currentUser } = firebase.auth();
  console.log('The current user is', currentUser);

  return (dispatch) => {
    // Add new employee data to the database
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      // Go back to list; use type: 'reset' so that there's no back button
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.employeeList({ type: 'reset' });
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      // listen for new data and do something everytime there is any
      .on('value', snapshot => {
        // snapshot is an object that describes the data
        dispatch({
          type: EMPLOYEES_FETCH_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};

export const employeeEdit = (employee) => {

};
