import {
  EDIT,
  CHANGE,
  CLOSE_EDIT,
  OPEN_ROLE_DROPDOWN,
  CHOOSE_ROLE,
  LOAD_FILE
} from '../constants/User'
import { load_file } from './../containers/file_hosting'

const initialState = {
  edit: false,
  selectedItem: null,
  dropdown_opened: false,
  selectedRole: null
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
          dropdown_opened: true,
      }
    case CHOOSE_ROLE:
      return {
          ...state,
          dropdown_opened: false,
          selectedRole: action.payload
      }
    case LOAD_FILE:
      load_file(action.payload)
    default:
      return state;
  }
}