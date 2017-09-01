// export default function preload_areas (city) {
// let y = city
// let areas = 'https://api.hh.ru/areas'

// fetch(areas)
//   .then((response) => {
//     return response.json();
//    })
//   .then((response) => {

//     let x = response[0].areas.map((item) => {
//       return item.areas
//     })

//     let x_arr = [];
//     for ( let i=0; i<x.length; i++ ) {
//       x_arr.push(x[i])
//     }

//     let x_arr_reduce = x_arr.reduce((result, current) => {
//       return result.concat(current);
//     }, []);
    
//     console.warn('============== response ==============');
//     console.warn(x_arr_reduce);
//     console.warn('-------- ГОРОД = ', y);
//     //============================================
//     let checkCity = (item) => {  
//         return item.name == y; 
//     }    
//     let result = x_arr_reduce.filter(checkCity);  
//     console.warn('result',result)
//     //============================================
//     let isCity2 = x_arr_reduce.filter((item) => {
//       return item.name == y;
//     });
//     let area_id = isCity2[0].id
//     console.warn('-------- area_id = ',area_id);
//     console.warn(isCity2[0].name,isCity2[0].id); 
//     //===========================================
//   })
// .catch( alert );
// }
