import {
    GET_LIST_REQUEST, 
    GET_LIST_SUCCESS,
    GET_PRELOAD_CITY,
} from '../constants/Page'

const initialState = {
    list: [],
    fetching: false,
    error: '',
    preload_city: null
}

export default function page(state = initialState, action) {
    switch (action.type) {
        case GET_LIST_REQUEST:
            return {
                ...state,
                fetching: true
            }
            case GET_PRELOAD_CITY:
            return {
                ...state,
                preload_city: action.payload
            }
        case GET_LIST_SUCCESS:
            return {
                ...state,
                list: action.payload,
                fetching: false,
                preload_city: null
            }
        default:
            return state;
    }
}