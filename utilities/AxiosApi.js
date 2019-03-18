import axios from 'axios';

import { MASTER_KEY, API_ROOT, APPLICATION_TYPE } from '../constants';
import { getCookie } from '../utilities/CookieManager';

const getAuthorizationToken = withToken => {
  const token = getCookie('token');
  return withToken ? { headers: { Authorization: `bearer ${token}` } } : {};
};

const addMasterKey = (body = {}, withMasterKey = false) => {
  return withMasterKey
    ? { data: { ...body, access_token: MASTER_KEY } }
    : { data: { ...body } };
};

const setAuthentication = authParams => {
  return { headers: { Authorization: `Basic ${authParams}` } };
};

export const setAuthenticationAPI = authParam => {
  return { headers: { Authorization: `bearer ${authParam}` } };
};

const getApiUrl = url => {
  return { url: API_ROOT + url };
};

export const basicAuthParams = loginFormData => {
  return btoa(`${loginFormData.email}:${loginFormData.password}`);
};

export const fetchApi = (
  url,
  withToken = true,
  method = 'GET',
  params,
  responseType
) => {
  return async (dispatch, getState) => {
    return axios({
      method: method,
      responseType,
      params,
      ...getApiUrl(url),
      ...getAuthorizationToken(getState(), withToken),
    });
  };
};

export const basicAuth = (url, authParams, withMasterKey = false) => {
  return async () => {
    return axios({
      method: 'POST',
      ...addMasterKey({ type: APPLICATION_TYPE }, withMasterKey),
      ...getApiUrl(url),
      ...setAuthentication(authParams),
    });
  };
};

export const basicAuthAPI = (url, authParam, withMasterKey = false) => {
  return async () => {
    return axios({
      method: 'POST',
      ...addMasterKey({ type: APPLICATION_TYPE }, withMasterKey),
      ...getApiUrl(url),
      ...setAuthenticationAPI(authParam),
    });
  };
};

export const sendApi = (
  url,
  data,
  withToken,
  withMasterKey,
  method = 'POST',
  formData = false
) => {
  return async dispatch => {
    const dataToSend = {
      method: method,
      ...getApiUrl(url),
      ...getAuthorizationToken(withToken),
    };

    if (!formData) {
      return axios({
        ...dataToSend,
        ...addMasterKey(data, withMasterKey),
      });
    } else {
      return axios({
        ...dataToSend,
        data,
      });
    }
  };
};
