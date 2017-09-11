import {
  EDIT,
  CHANGE,
  CLOSE_EDIT,
  OPEN_ROLE_DROPDOWN,
  CHOOSE_ROLE,
  LOAD_FILE,
  CHECK_ERRORS
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
  },
  errors: {
    first_name: '',
    last_name: '',
    birth_date: '',
    description: ''
  }
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case EDIT:
      window.scrollTo(0,0);
      return {
          ...state,
          edit: true,
          selectedItem: action.payload,
          errors: {
            first_name: '',
            last_name: '',
            birth_date: '',
            description: ''
          }
      }
    case CHANGE:
      let obj = state.selectedItem;
      let keypress_on_error = state.errors;
        for (let [key] of Object.entries(obj)) {
          if (key === action.payload[0]) {
            obj[key] = action.payload[1];
            keypress_on_error[key] = '';
          }
        }
        return {
          ...state,
          selectedItem: obj,
          errors: keypress_on_error
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


    case CHECK_ERRORS:
      let arr = action.payload;
      let require_fields = state.errors;
      let selected_arr = [];
      let err_arr = [];

      for (let [key] of Object.entries(arr)) {selected_arr.push([key].toString())}
      for (let [key] of Object.entries(require_fields)) {err_arr.push([key].toString())}

      for (let i = 0; i < err_arr.length; i++) {
        if (arr.hasOwnProperty(err_arr[i])) {
          if (arr[err_arr[i]].length === 0) {
            require_fields[err_arr[i]] = 'error_color'
          } else require_fields[err_arr[i]] = ''
      }}

      return {
      ...state,
      errors: require_fields
      }
    default:
      return state;
  }
}