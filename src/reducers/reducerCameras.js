import {match} from '../utils/match';

const INITIAL_STATE = {
    isShowing: false,
    camsViews: {},
    error: false
};

export default (state = INITIAL_STATE, {type, payload}) => match(type, {
    GET_CAM_VIEW_SUCCESS: () => ({
        ...state,
        isShowing: true,
        camsViews: payload.data,
    }),
    GET_CAM_VIEW: () => ({
        ...state,
        isShowing: false,
    }),
    GET_CAM_VIEW_ERROR: () => ({
        ...state,
        isShowing: false,
        error: true
    }),
}, state);