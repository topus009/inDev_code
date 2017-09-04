import {
    GET_LIST_SUCCESS,
    GET_ROLES_SUCCESS
} from '../constants/Page'

const initialState = {
    list: null,
    roles: null,
}

export default function page(state = initialState, action) {
    switch (action.type) {
        case GET_LIST_SUCCESS:
            return {
                ...state,
                list: action.payload
            }
        case GET_ROLES_SUCCESS:
            return {
                ...state,
                roles: action.payload
        }
        default:
            return state;
    }
}