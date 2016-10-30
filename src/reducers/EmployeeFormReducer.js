import {
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /*
     * action.payload here will be { prop: 'someField', value: 'fieldValue' }
     */
    case EMPLOYEE_UPDATE:
      // same as const newState = {}; newState[action.payload.prop] = action.payload.value;
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
