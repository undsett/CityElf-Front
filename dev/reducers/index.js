import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authorizationReducer from './authorizationReducer';
import userReducer from './userReducer';


// function editUserData(state = initialUserData, action) {
//     if (action.type === 'EDIT_USER_INFO') {
//         return Object.assign({}, state, action.payload);
//     }
//     return state;
// }



export default combineReducers({
    routing: routerReducer,
    authorization: authorizationReducer,
    userReducer
    // editUserData
})