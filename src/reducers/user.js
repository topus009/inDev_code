import {
  EDIT,
  CHANGE,
  CLOSE_EDIT
} from '../constants/User'

const initialState = {
  edit: false,
  selectedItem: null  
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
    default:
      return state;
  }
}