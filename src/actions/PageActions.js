import { 
    GET_LIST_SUCCESS,
    GET_ROLES_SUCCESS,
    CHANGE_SEARCH_INPUT,
    SAVE
} from '../constants/Page'
import { preloadList, preloadRoles } from '../containers/preloadData'

export function preload_List () {
    return (dispatch) => {
        preloadList().then(response => {

            const LOCAL_STORAGE = localStorage.getItem('LOCAL_LIST') ? JSON.parse(localStorage.getItem('LOCAL_LIST')) : null

            dispatch({
                type: GET_LIST_SUCCESS,
                // payload: LOCAL_STORAGE !== null ? LOCAL_STORAGE : response
                payload: response 
            });
        }, 
        error => console.warn(`Rejected: ${error}`),
        )
    }
}

export function preload_Roles () {
    return (dispatch) => {
        preloadRoles().then(response => {
                dispatch({
                    type: GET_ROLES_SUCCESS,
                    payload: response
                });
        }, 
        error => console.warn(`Rejected: ${error}`),
        )
    }
}

export function change_search_input (value) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_SEARCH_INPUT,
            payload: value
        });
    }
}

export function save (selectedItem) {
    return (dispatch) => {
        dispatch({
            type: SAVE,
            payload: selectedItem
        });
    }
}