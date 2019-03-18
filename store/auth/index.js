import { createAction, handleActions } from 'redux-actions';

import { LOGOUT } from '../sharedActions';

export const SET_AUTH_STATUS = 'SET_AUTH_STATUS';

const defaultState = {
  isLogged: false,
  token: '',
};

export const setAuthStatus = createAction(SET_AUTH_STATUS);

export default handleActions(
  {
    [SET_AUTH_STATUS]: (state, action) => {
      return { ...state, ...action.payload };
    },
    [LOGOUT]: (state, action) => {
      return defaultState;
    },
  },
  defaultState
);
