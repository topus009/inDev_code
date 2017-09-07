import {
    GET_LIST_SUCCESS,
    GET_ROLES_SUCCESS,
    CHANGE_SEARCH_INPUT,
    SAVE
} from '../constants/Page'

const initialState = {
    list: null,
    roles: null,
    search_input: ""
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
        case CHANGE_SEARCH_INPUT:
            return {
                ...state,
                search_input: action.payload
            }
        case SAVE:

        let savedItem_id = action.payload.id;
        let list_ = state.list;
        for (let i = 0; i < list_.length; i++) {
            if (list_[i].id = savedItem_id) {
                list_[i] = action.payload;
            }
        }
        localStorage.setItem('LOCAL_LIST', JSON.stringify(state.list))
            return {
                ...state,
                list: state.list_
        }
        default:
            return state;
    }
}

// , UserActions.close_edit()}