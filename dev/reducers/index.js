import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authorizationReducer from './authorizationReducer';
import userReducer from './userReducer';


export default combineReducers({
    routing: routerReducer,
    authorization: authorizationReducer,
    userReducer
})