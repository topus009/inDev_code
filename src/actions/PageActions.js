import { 
    GET_LIST_SUCCESS,
    GET_ROLES_SUCCESS
} from '../constants/Page'
// import loadData from '../containers/loadData'
import { preloadList, preloadRoles } from '../containers/preloadData'



export function preload_List() {
    return (dispatch) => {
        preloadList().then(response => {
                dispatch({
                    type: GET_LIST_SUCCESS,
                    payload: response
                });
        }, 
        error => console.warn(`Rejected: ${error}`),
        )
    }
}

export function preload_Roles() {
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