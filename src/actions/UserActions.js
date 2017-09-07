import {
    EDIT, 
    CHANGE,
    CLOSE_EDIT
} from '../constants/User'

export function edit (item) {
    return (dispatch) => {
        dispatch({
            type: EDIT,
            payload: item
        });
    }
}

export function change (key, value) {
    return (dispatch) => {
        dispatch({
            type: CHANGE, 
            payload: [key, value]
        });
    }
}

export function close_edit () {
    return (dispatch) => {
        dispatch({
            type: CLOSE_EDIT
        });
    }
}