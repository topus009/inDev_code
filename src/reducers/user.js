import {
  EDIT,
  CHANGE
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
      return {
        ...state,
        selectedItem: {[action.key]: action.value}
      }
    default:
      return state;
  }
}


let xxx = {
  "id": 3,
  "first_name": "Гарольд",
  "last_name": "Джордан",
  "post": 1,
  "birth_date": "1959-11-30T21:00:00.000Z",
  "description": "В качестве Зелёного Фонаря Хэл патрулировал сектор под номером 2814, который включает в себя Солнечную систему и немного выходит за её пределы. Параллельно, Хэл скрывал свою личность и продолжал работать пилотом в компании «Феррис Эиркрафт», где о нём как о Зелёном Фонаре знал только его друг, механик инуитского происхождения Томас Калмаку. Имел романтические отношения с владелицей компании, пилотом Кэрол Феррис, так же впоследствии известной как Звёздный Сапфир.",
  "image": "http://view.indev-group.eu/images/test_api/green_lattern.jpg"
}