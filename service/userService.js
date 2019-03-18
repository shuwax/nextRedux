import { fetchApi } from '../utilities/AxiosApi';

import { API } from '../constants';

import { setCurrentUser } from '../store/user';

export const getCurrentUser = () => {
  return async dispatch => {
    try {
      const response = await dispatch(fetchApi(API.USER.CURRENT_USER, true));
      const { data } = response;
      dispatch(setCurrentUser(data));
      return response.status;
    } catch (error) {
      throw error
    }
  };
};
