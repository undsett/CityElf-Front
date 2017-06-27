import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import Request from 'superagent';

import App from './components/App';
import './style.scss';


let initialUserData = {};

const CURRENT_USER_ID = 1; 
const CURRENT_USER_DATA_URL= "http://localhost:8088/services/users/" + CURRENT_USER_ID;

Request.get(CURRENT_USER_DATA_URL).then((response) => {
	initialUserData = response.body
	function editUserData(state = initialUserData, action) {
		if (action.type === 'EDIT_USER_INFO') {
			return Object.assign({}, state, action.payload);
		}
		return state;
	}

	const store = createStore(editUserData);

	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	);	

});





			
		

