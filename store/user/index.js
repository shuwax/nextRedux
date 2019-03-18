import { createAction, handleActions } from 'redux-actions';

import { LOGOUT } from '../sharedActions';

const SET_CURRENT_USER = 'SET_CURRENT_USER';

const defaultState = {
  currentUser: {},
};

export const setCurrentUser = createAction(SET_CURRENT_USER);

export default handleActions(
  {
    [SET_CURRENT_USER]: (state, action) => {
      return { ...state, currentUser: action.payload };
    },
    [LOGOUT]: (state, action) => {
      return defaultState;
    },
  },
  defaultState
);

//Selectors
export const getCurrentUserStateBranch = state => {
  return state.currentUser;
};

export const getCurrentUser = state => {
    console.log(state)
  return getCurrentUserStateBranch(state).currentUser;
};

export const getCurrentUserId = state => {
  return getCurrentUser(state).id;
};

export const getCurrentUserEmail = state => {
  return getCurrentUser(state).email;
};
