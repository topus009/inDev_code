import {
    EDIT, 
    CHANGE
} from '../constants/User'

export function edit(item) {
    return (dispatch) => {
        dispatch({
            type: EDIT,
            payload: item
        });
    }
}

export function change(key, value) {
    return (dispatch) => {
        dispatch({
            type: CHANGE, 
            payload: [key, value]
        });
    }
}