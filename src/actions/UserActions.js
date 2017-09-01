import { 
    CHANGE_VACANCY, 
    CHANGE_CITY, 
    SEARCH,
    //FILTER 
} from '../constants/User'

export function changeVacancy(vacancy) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_VACANCY, 
            payload: vacancy
        });
    }
}

export function changeCity(city) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_CITY, 
            payload: city
        });
    }
}

export function handleSubmit(vacancy, city) {
    return (dispatch) => {
        dispatch({
            type: SEARCH, 
            payload: {
                    'vacancy': vacancy, 
                    'city': city
            }
        });
    }
}

// export function inputFilter(filter) {
//     return (dispatch) => {
//         dispatch({
//             type: FILTER, 
//             payload: filter
//         });
//     }
// }