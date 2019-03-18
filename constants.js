export const API = {
  USER: {
    CURRENT_USER: 'users/me',
  },
  AUTH: {
    LOGIN: 'auth/',
    LOGIN_GOOGLE_API: 'auth/google/',
    LOGIN_FACEBOOK_API: 'auth/facebook/',
  },
  PASSWORD_RESET: {
    SEND_EMAIL: 'password-resets/',
    PUT_PASSWORD: 'password-resets/',
  },
};

export const MASTER_KEY = 'oieeY7jIUTvErfVE7UgX903SlVU7Q1pQ';
export const API_ROOT = 'http://localhost:5000/';

export const API_AUTH_TYPE = {
  LOGIN_GOOGLE_API: 'LOGIN_GOOGLE_API',
  LOGIN_FACEBOOK_API: 'LOGIN_FACEBOOK_API',
};

export const APPLICATION_TYPE = 'WEB';

export const OPEN_ROUTE = ['login', 'passwordReset', 'passwordSet'];

export const RESPONSE_ERROR_CODE = {
  LOGIN: {
    NON_ACTIVATE: 405,
    USER_NOT_EXIST: 401,
    WRONG_DATA: 406,
  },
};
