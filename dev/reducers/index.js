import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authorizationReducer from './authorizationReducer';

// const initialUserData = {"id":1,"email":"salomatkin@gmail.com","phone":"0683334377","password":"123456????","notification":{"sms":true,"email":true,"push":true},"token":null,"expirationDate":null,"activated":false,"authorized":"authorized","firebaseId":"ddgi9-RE_BM:FrCg7RKwq7c_tLTtH41ico8aJ2UWtNtXz5WAl--uqaY3r7J6847xDs13-Kc8zVylMqAdtgLVkWMuV2PDr_U1gOY2NCroE-PqoeyUC1Yl3rxu9jpbHvDRDzpxEKvAMoIWsSTKRx"};


// function editUserData(state = initialUserData, action) {
//     if (action.type === 'EDIT_USER_INFO') {
//         return Object.assign({}, state, action.payload);
//     }
//     return state;
// }



export default combineReducers({
    routing: routerReducer,
    authorization: authorizationReducer,
    // editUserData
})