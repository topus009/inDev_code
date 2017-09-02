import {
  SEARCH
} from '../constants/User'

const initialState = {
   vacancy: '',
   city: ''
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        vacancy: action.payload.vacancy,
        city: action.payload.city
      }
    default:
      return state;
  }
}