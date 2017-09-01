import {
  CHANGE_VACANCY, 
  CHANGE_CITY, 
  SEARCH,
  //FILTER
} from '../constants/User'

const initialState = {
   vacancy: '',
   city: ''
   //filter: ''
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VACANCY:
      return {
        ...state,
        vacancy: action.payload
      }
    case
      CHANGE_CITY:
      return {
        ...state,
        city: action.payload
      }
    case SEARCH:
      return {
        ...state,
        vacancy: action.payload.vacancy,
        city: action.payload.city
      }
    // case FILTER:
    //   return {
    //     ...state,
    //     filter: action.payload
    //   }
    default:
      return state;
  }
}