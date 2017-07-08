import React from 'react';

export default class RegistrationFormGroup extends React.Component{
	constructor(props) {
		super(props);
		
        this.state = {
            
        }
	}
	render() {
		return(
			<form>
				<h2>
	                Регистрация
	            </h2>
				<div className="form-group">
	                <input type="email"className="form-control" placeholder="Email*"/>
	                <input type="text" className="form-control" placeholder="Телефон"/>
	                <input type="password" className="form-control" placeholder="Пароль*"/>
	                <button id="sign-up" type="submit" className="btn btn-default form-control">Регистрация
	                </button>
	                <div><strong>*-Обязательные для заполнения поля</strong></div>
	            </div>
            </form>
		)
	} 
}