import {
    GET_LIST_REQUEST, 
    GET_LIST_SUCCESS,
    EDIT
} from '../constants/Page'

const initialState = {
    list: null,
    fetching: false,
    selectedItem: null,
    edit: false
}

export default function page(state = initialState, action) {
    switch (action.type) {
        case GET_LIST_REQUEST:
            return {
                ...state,
                fetching: true
            }
        case GET_LIST_SUCCESS:
            return {
                ...state,
                list: action.payload,
                fetching: false
            }
        case EDIT:
            return {
                ...state,
                selectedItem: action.payload,
                edit: true
            }
        default:
            return state;
    }
}