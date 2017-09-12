import {
    CHANGE,
    CHECK_ERRORS,
    CHOOSE_ROLE,
    CLOSE_EDIT,
    EDIT, 
    LOAD_FILE,
    OPEN_ROLE_DROPDOWN
} from '../constants/User'

export function change (key, value) {
    return (dispatch) => {
        dispatch({
            type: CHANGE, 
            payload: [key, value]
        });
    }
}

export function check_errors (item) {
    return (dispatch) => {
        dispatch({
            type: CHECK_ERRORS, 
            payload: item
        });
    }
}

export function choose_role (role, id) {
    return (dispatch) => {
        dispatch({
            type: CHOOSE_ROLE, 
            payload: [role, id]
        });
    }
}

export function close_edit (errors) {
    return (dispatch) => {
        dispatch({
            type: CLOSE_EDIT,
            payload: errors
        });
    }
}

export function edit (item) {
    return (dispatch) => {
        dispatch({
            type: EDIT,
            payload: item
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

export function open_dropdown () {
    return (dispatch) => {
        dispatch({
            type: OPEN_ROLE_DROPDOWN
        });
    }
}