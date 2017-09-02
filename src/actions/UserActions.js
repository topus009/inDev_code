import { 
    SEARCH
} from '../constants/User'

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