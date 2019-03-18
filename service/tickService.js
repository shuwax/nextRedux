import { incrementCount } from '../store/tick';

export const incrementTick = () => {
    return async (dispatch) => {
        try {
            dispatch(incrementCount());
        } catch (error) {
            console.log(1)
        }
    };
};
