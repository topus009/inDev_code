import {
    GET_LIST_SUCCESS,
    GET_ROLES_SUCCESS,
    CHANGE_SEARCH_INPUT,
    SAVE,
    DELETE,
    OPEN_SORT_DROPDOWN,
    CHOOSE_SORT,
    CHOOSE_SORT_DIR
} from '../constants/Page'
import { sort } from './../helpers/sort'
import { filter } from './../helpers/filter'
const initialState = {
    list: null,
    roles: null,
    search_input: "",
    dropdown_opened: false,
    sort_active: false,
    sort_by: null,
    sort_dir: 'up',
    filtered_list: {}
}

export default function page(state = initialState, action) {
    switch (action.type) {
        case GET_LIST_SUCCESS:        
            action.payload.forEach(item => {
                // форматирование даты
                item.birth_date = item.birth_date.slice(0, 10).replace(/[-]/g, '.');
            });

            return {
                ...state,
                // сортировка списка по умолчанию
                list: sort('По возрасту', action.payload),
            }
        case GET_ROLES_SUCCESS:
            return {
                ...state,
                roles: action.payload
            }
        case CHANGE_SEARCH_INPUT:
            return {
                ...state,
                search_input: action.payload,
                // создается новый отфильтрованный список
                filtered_list: filter(state.list, action.payload)
            }
        case SAVE:
            let savedItem_id = action.payload[0].id;
            let list_ = state.list;
            let item_keys = [];
            let error = false;
            // подготовка проверки на наличие ошибок
            for (let [key] of Object.entries(action.payload[1])) {item_keys.push([key].toString())}

            for (let i = 0; i < item_keys.length; i++) {
                if (action.payload[1][item_keys[i]].length === 0) {error = true}
                else error = false;
            }

            for (let i = 0; i < list_.length; i++) {
                if (list_[i].id === savedItem_id) {
                    list_[i] = action.payload[0];
                }
            }
            // если хотя бы в обном поле ошибка - форма не сохранится
            if (!error) {
                localStorage.setItem('LOCAL_LIST', JSON.stringify(list_))

                return {
                    ...state,
                    list: list_
                }
            }
        case DELETE:
            savedItem_id = action.payload.id;
            list_ = state.list;

            for (let i = 0; i < list_.length; i++) {
                if (list_[i].id === savedItem_id) {
                    list_.splice(i, 1);
                }
            }

            localStorage.setItem('LOCAL_LIST', JSON.stringify(list_))
            
            return {
                ...state,
                list: list_
            }
        case OPEN_SORT_DROPDOWN:
            return {
                ...state,
                dropdown_opened: true
            }
        case CHOOSE_SORT:
            return {
                ...state,
                dropdown_opened: false,
                sort_active: true,
                sort_by: action.payload,
                // если есть отфильррованный список, то отсортируем его
                filtered_list: state.filtered_list.length > 0 ? sort(action.payload, state.filtered_list) : {},
                list: sort(action.payload, state.list)
            }
        case CHOOSE_SORT_DIR:
            return {
                ...state,
                // по возрастанию / по убыванию
                filtered_list: state.filtered_list.length > 0 ? state.filtered_list.reverse() : {},
                list: state.list.reverse(),
                // для CSS
                sort_dir: action.payload === 'up' ? 'down' : 'up'
            }
        default:
            return {...state}
    }
}