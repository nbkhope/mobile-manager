import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMPLOYEE_UPDATE
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

  return () => {
    // Add new employee data to the database
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      // Go back to list; use type: 'reset' so that there's no back button
      .then(() => Actions.employeeList({ type: 'reset' }));
  };
};
