import {
    EDIT, 
    CHANGE,
    CLOSE_EDIT,
    OPEN_ROLE_DROPDOWN,
    CHOOSE_ROLE,
    LOAD_FILE
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

export function open_dropdown () {
    return (dispatch) => {
        dispatch({
            type: OPEN_ROLE_DROPDOWN
        });
    }
}

export function choose_role (role) {
    return (dispatch) => {
        dispatch({
            type: CHOOSE_ROLE, 
            payload: role
        });
    }
}

export function load_file (id, file) {
    return (dispatch) => {
        dispatch({
            type: LOAD_FILE, 
            payload: [id, file]
        });
    }
}