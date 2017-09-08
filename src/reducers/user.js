import {
  EDIT,
  CHANGE,
  CLOSE_EDIT,
  OPEN_ROLE_DROPDOWN,
  CHOOSE_ROLE
} from '../constants/User'

const initialState = {
  edit: false,
  selectedItem: null,
  role_dropdown: {
    opened: false,
    selectedRole: null
  }  
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case EDIT:
      return {
          ...state,
          edit: true,
          selectedItem: action.payload
      }
    case CHANGE:
      let obj = state.selectedItem;
        for (let [key] of Object.entries(obj)) {
          if (key === action.payload[0]) {
            obj[key] = action.payload[1];
          }
        }
        return {
          ...state,
          selectedItem: obj
        }
    case CLOSE_EDIT:
      return {
          ...state,
          edit: false,
          selectedItem: null
      }
    case OPEN_ROLE_DROPDOWN:
      return {
          ...state,
          role_dropdown: {opened: true}
      }
    case CHOOSE_ROLE:
      return {
          ...state,
          role_dropdown: {
            opened: false,
            selectedRole: action.payload
          }
      }
    default:
      return state;
  }
}