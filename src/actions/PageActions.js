import { 
    GET_LIST_SUCCESS,
    EDIT
} from '../constants/Page'
// import loadData from '../containers/loadData'
import preloadData from '../containers/preloadData'

export function edit(item) {
    return (dispatch) => {
            dispatch({
                type: EDIT,
                payload: item
            });
    }
}

export function preload_action() {
    return (dispatch) => {
        preloadData().then(response => {
                dispatch({
                    type: GET_LIST_SUCCESS,
                    payload: response
                });
        }, 
        error => console.warn(`Rejected: ${error}`),
        )
    }
}