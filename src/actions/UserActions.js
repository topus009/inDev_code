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

export function change(vacancy, city) {
    return (dispatch) => {
        dispatch({
            type: CHANGE, 
            payload: {
                    'vacancy': vacancy, 
                    'city': city
            }
        });
    }
}