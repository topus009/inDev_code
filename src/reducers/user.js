import {
  EDIT,
  CHANGE,
  CLOSE_EDIT,
  OPEN_ROLE_DROPDOWN,
  CHOOSE_ROLE,
  LOAD_FILE
} from '../constants/User'

const initialState = {
  edit: false,
  selectedItem: null,
  dropdown_opened: false,
  selectedRole: null,
  new_image: {
    id: null,
    name: null,
    base64: null
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
          dropdown_opened: true,
      }
    case CHOOSE_ROLE:
      return {
          ...state,
          dropdown_opened: false,
          selectedRole: action.payload
      }
    case LOAD_FILE:
      let FR = new FileReader();
      let random_name = 'image_to_base64';
      let file = action.payload[1];
      let base64;
      FR.readAsDataURL(file);
      base64 = localStorage[random_name];

      FR.onload = function(e) {
        localStorage.setItem(random_name, e.target.result);
      }
      return {
        ...state,
        new_image: {
          id: action.payload[0],
          name: random_name,
          base64: base64
        },
        selectedItem: {
          ...state.selectedItem,
          image: base64
        }
      }
    default:
      return state;
  }
}