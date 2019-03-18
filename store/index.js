import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import mainReducer from './mainReducer';

const composeEnhancers =
    process.env.NODE_ENV === 'production'
        ? compose
        : composeWithDevTools({
            // Specify name here, actionsBlacklist, actionsCreators and other options if needed
        });

export function initializeStore (initialState) {
    return createStore(
        mainReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunkMiddleware))
    )
}
