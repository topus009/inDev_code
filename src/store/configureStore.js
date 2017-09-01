import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';


// function thunkMiddleware(store) {
//   return function (next) {
//     return function (action) {
//       if (typeof action === "function") {
//         return action(store.dispatch, store.getState);
//       } else {
//         return next(action);
//       }
//     }
//   }
// }


export default function configureStore(initialState) {
    const logger = createLogger()
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, logger))
        //applyMiddleware(thunkMiddleware());
        
    if (module.hot) {
        module.hot.accept('../reducers', () => {
                const nextRootReducer = require('../reducers')
                store.replaceReducer(nextRootReducer)
            })
    }
    return store
}