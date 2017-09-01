import { 
    GET_LIST_REQUEST, 
    GET_LIST_SUCCESS,
    GET_PRELOAD_CITY,
    //GET_LIST_FAIL 
} from '../constants/Page'
import loadData from '../containers/loadData'
import preload_areas from '../containers/loadAreas'

export function getList(vacancy, city) {
    return (dispatch) => {
        setTimeout(() => {
        dispatch({type: GET_LIST_REQUEST});
        let list;

        loadData(vacancy, city).then(response => {
            list = JSON.parse(response).items;

            dispatch({
                type: GET_LIST_SUCCESS,
                payload: list
            });
        }, 
        error => console.warn(`Rejected: ${error}`),
        )},300)
    }
}

export function preload_action(city) {
    return (dispatch) => {
        preload_areas().then(response => {
            let x_arr = [],
            area_id,
            x,
            x_arr_reduce,
            isCity2;
            
            switch (city.toLowerCase().trim()) {
              case 'москва':
                area_id = 1;
                break;
              case 'санкт-петербург':
                area_id = 2;
                break;
              default:
                x = JSON.parse(response)[0].areas.map((item) => {return item.areas});
                for ( let i=0; i < x.length; i++ ) {x_arr.push(x[i])}
                x_arr_reduce = x_arr.reduce((result, current) => {return result.concat(current)}, []);
                isCity2 = x_arr_reduce.filter((item) => {return item.name.toLowerCase() === city.toLowerCase()});            
                area_id = isCity2[0].id;
            }
                dispatch({
                    type: GET_PRELOAD_CITY,
                    payload: area_id
                });
        }, 
        error => console.warn(`Rejected: ${error}`),
        )
    }
}