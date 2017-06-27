import React from 'react';
import Request from 'superagent';
import { connect } from 'react-redux'; 

import {userResources} from '../resources/userResources.js';


class App extends React.Component {
	
	constructor() {
		super();

		this.changeEmail = this.changeEmail.bind(this);
		this.changePhone = this.changePhone.bind(this);
		this.changeNotif_Email = this.changeNotif_Email.bind(this);
		this.changeNotif_Sms = this.changeNotif_Sms.bind(this);
		this.submitForm = this.submitForm.bind(this); 
	}

	changeEmail(e) {
		this.props.onEditUserInfo({'email': e.target.value})
	}

	changePhone(e) {
		this.props.onEditUserInfo({'phone': e.target.value})
	}

	changeNotif_Email(e) {
		const notification = Object.assign(this.props.currentUserData.notification, {'email': !!e.target.checked});
		this.props.onEditUserInfo({'notification': notification});
	}

	changeNotif_Sms(e) {
		const notification = Object.assign(this.props.currentUserData.notification, {'sms': !!e.target.checked});
		this.props.onEditUserInfo({'notification': notification});
	}

	submitForm(e) {
		e.preventDefault();
		userResources.updateCurrentUserData(this.props.currentUserData);
	}

	render() {  
		return (
			<form onSubmit = {this.submitForm}>
				<input
					type = "text"
					value = {this.props.currentUserData.email}
					onChange = {this.changeEmail}					
				/>
				<input
					type = "text"
					value = {this.props.currentUserData.phone}
					onChange = {this.changePhone}
				/>
				<input
					type = "checkbox"
					checked = {this.props.currentUserData.notification.email}
					onChange = {this.changeNotif_Email}
				/>Email
				<input
					type = "checkbox"
					checked = {this.props.currentUserData.notification.sms}
					onChange = {this.changeNotif_Sms}
				/>SMS
				<input
					type = "submit"
					value = "Сохранить"
				/>
			</form>
		)
	}
}

export default connect(
	state => ({
		currentUserData: state
	}),
	dispatch => ({
		onEditUserInfo: (userInfo) => {
			dispatch({ type: 'EDIT_USER_INFO', payload: userInfo});
		}
	})
)(App);

