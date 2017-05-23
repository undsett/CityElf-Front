import React from 'react';

import {userResources} from '../resources/userResources.js';



export default class App extends React.Component {
	
	constructor(){
		super();
	}

	componentWillMount() {
		userResources.getAllUsers();
	}

	render() {		
		return <div>Hello from React Component</div>
		
	}
}

