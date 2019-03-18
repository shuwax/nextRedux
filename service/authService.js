import { setAuthStatus } from '../store/auth/';
import { logout } from '../store/sharedActions';

import { clearCookie } from '../utilities/CookieManager';

import { getCurrentUser } from '../service/userService';

export const authUserFromTokenInCookie = () => {
  return async (dispatch, getState) => {
    try {
      const {
        auth: { isLogged, token },
      } = getState();
      if (isLogged) {
        return;
      }
      if (token.length) {
        await dispatch(getCurrentUser());
        dispatch(setAuthStatus({ isLogged: true }));
        return true;
      }
      return false;
    } catch (error) {
      throw error
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    try {
      await dispatch(logout());
      clearCookie();
    } catch (error) {
      dispatch(logout());
      clearCookie();
    }
  };
};
