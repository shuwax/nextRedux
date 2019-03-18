import { combineReducers } from 'redux';

import tick from './tick'
import auth from './auth';
import user from './user';
const mainReducer = combineReducers({
    tick,
    user,
    auth
});

export default mainReducer;
