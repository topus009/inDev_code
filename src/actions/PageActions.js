import { 
    CHANGE_SEARCH_INPUT,
    CHOOSE_SORT,
    CHOOSE_SORT_DIR,
    DELETE,
    GET_LIST_SUCCESS,
    GET_ROLES_SUCCESS,
    OPEN_SORT_DROPDOWN,
    SAVE
} from '../constants/Page'
import { preloadList, preloadRoles } from '../helpers/preloadData'

export function change_search_input (value) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_SEARCH_INPUT,
            payload: value
        });
    }
}

export function choose_sort (value) {
    return (dispatch) => {
        dispatch({
            type: CHOOSE_SORT,
            payload: value
        });
    }
}

export function choose_sort_dir (dir) {
    return (dispatch) => {
        dispatch({
            type: CHOOSE_SORT_DIR,
            payload: dir
        });
    }
}

export function delete_item (selectedItem) {
    return (dispatch) => {
        dispatch({
            type: DELETE,
            payload: selectedItem
        });
    }
}

export function preload_List () {
    return (dispatch) => {
        preloadList().then(response => {
            // если в локальном хранилище есть сохраненный список, то загрузится он
            const LOCAL_STORAGE = localStorage.getItem('LOCAL_LIST') ? 
            JSON.parse(localStorage.getItem('LOCAL_LIST')) : null

            dispatch({
                type: GET_LIST_SUCCESS,
                payload: LOCAL_STORAGE !== null ? LOCAL_STORAGE : response
                // payload: response
                // это если захотели вернуть список сервера вместо списка из локального хранилища
                // или можете в консоли браузера ввести - for (key in localStorage) {localStorage.removeItem(key)}
            });
        }, error => console.warn(`Rejected: ${error}`))
    }
}

export function preload_Roles () {
    return (dispatch) => {
        preloadRoles().then(response => {
                dispatch({
                    type: GET_ROLES_SUCCESS,
                    payload: response
                });
        }, error => console.warn(`Rejected: ${error}`))
    }
}

export function open_dropdown () {
    return (dispatch) => {
        dispatch({
            type: OPEN_SORT_DROPDOWN
        });
    }
}

export function save_item (selectedItem, errors) {
    return (dispatch) => {
        dispatch({
            type: SAVE,
            payload: [selectedItem, errors]
        });
    }
}





