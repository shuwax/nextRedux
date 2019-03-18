import { createAction, handleActions } from 'redux-actions'


export const actionTypes = {
    TICK: 'TICK',
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET'
}

export const TICK = 'TICK';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';


const defaultState = {
    lastUpdate: 0,
    light: false,
    count: 0
};


export const serverRenderClock = createAction(TICK);
export const startClock = createAction(TICK);
export const incrementCount = createAction(INCREMENT);
export const decrementCount = createAction(DECREMENT);
export const resetCount = createAction(RESET);

export default handleActions(
    {
        [TICK]: (state, action) => {
            const light = !!action.light
            const lastUpdate = action.ts
            return { ...state, light : light,  lastUpdate: lastUpdate};
        },
        [INCREMENT]: (state, action) => {
            const count = state.count + 1
            return { ...state, count: count };
        },
        [DECREMENT]: (state, action) => {
            const count = state.count - 1
            return { ...state, count: count };
        },
        [RESET]: (state, action) => {
            return defaultState
        },
    },
    defaultState
);
