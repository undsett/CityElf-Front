import React from 'react';

export default class LoginFormGroup extends React.Component{
	constructor(props) {
		super(props);
		
        this.state = {
            email: '',
            password: ''
        }
        this.changeValue = this.changeValue.bind(this);
        this.submitForm = this.submitForm.bind(this);
	}

	changeValue(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	submitForm(e) {
		e.preventDefault();
		console.log(this.state);
	}

	render() {
		return(
			<form onSubmit={this.submitForm}>
				<h2>
		            Вход
		        </h2>
				<div className="form-group">
	                <input 
	                    type="text"
	                    name="email"
	                    value={this.state.email}
	                    onChange={this.changeValue} 
	                    className="form-control" 
	                    placeholder="Email"
	                />
	                <input 
	                    type="password"
	                    name="password"
	                    value={this.state.password} 
	                    onChange={this.changeValue}
	                    className="form-control" 
	                    placeholder="Пароль"
	                />
	                <button id="sign-in" type="submit" className="btn btn-default sign-in-btn form-control">
	                    Войти
	                </button>
	                <div className="checkbox">
	                    <label><input type="checkbox" value=""/>Запомнить меня</label>
	                </div>
	                <a href="#">Забыли пароль?</a>
	            </div>
            </form>
		)
	} 
}