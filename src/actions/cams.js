import {cams as types} from '@/constants/actionsNames'
import axios from 'axios';

export function getCamsAction() {
    return {
        type: types.GET_CAM_VIEW
    };
}

export function getCamsErrorAction() {
    return {
        type: types.GET_CAM_VIEW_ERROR
    };
}

export function getCamsSuccessAction(data) {
    return {
        type: types.GET_CAM_VIEW_SUCCESS,
        payload: {
            data
        }
    };
}

export function getCams() {
    return (dispatch) => {
        dispatch(getCamsAction());
        return axios({
            method: 'get',
            url: 'https://makevoid-skicams.p.mashape.com/cams.json',
            headers: {'X-Mashape-Key': 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw'}
        }).then((response) => {
            dispatch(getCamsSuccessAction(response.data));
        }).catch((error) => {
            dispatch(getCamsErrorAction());
        });
    };
}
