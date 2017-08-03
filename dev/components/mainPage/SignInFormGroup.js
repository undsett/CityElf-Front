import React from 'react';
import classnames from 'classnames';

export default class SignInFormGroup extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false,
            errorLoginPassword: ''
        }
        this.changeValue = this.changeValue.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    changeValue(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(
            {[name]: value},
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'Введите корректный email';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': 'Пароль должен быть не менее 6 символов';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
    }

    validateForm() {
        this.setState({
            formValid: this.state.emailValid && this.state.passwordValid
        });
    }

    submitForm(e) {
        e.preventDefault();
        this.props.checkLoginPasswordRequest(this.state.email, this.state.password).then(
            (response) => {
                const responseData = JSON.parse(response.text);
                if(responseData.status.code == 31) {
                    this.setState({
                        errorLoginPassword: responseData.status.message
                    })
                }
                if(responseData.status.code == 33) {
                    localStorage.setItem('currentUser', JSON.stringify(responseData.user));
                    this.props.setCurrentUser(responseData.user);
                    this.props.closeModal();
                    this.context.router.push('/profile');
                }
            }   
        );

    }

    render() {
        const {formErrors, errorLoginPassword} = this.state;
        return(
            <form onSubmit={this.submitForm}>
                <h2>
                    Вход
                </h2>
                 <div className={classnames("form-group", { 'has-error': formErrors.email || this.state.errorLoginPassword })}>
                    <input 
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.changeValue} 
                        className="form-control" 
                        placeholder="Email"
                    />
                    {formErrors.email && <span className="help-block">{formErrors.email}</span>}
                    {errorLoginPassword && <span className="help-block">Email или пароль неверный</span>}
                </div>    
                <div className={classnames("form-group", { 'has-error': formErrors.password })}>    
                    <input 
                        type="password"
                        name="password"
                        value={this.state.password} 
                        onChange={this.changeValue}
                        className="form-control" 
                        placeholder="Пароль"
                    />
                    {formErrors.password && <span className="help-block">{formErrors.password}</span>}
                </div> 
                <div className="form-group">   
                    <button 
                        id="sign-in" 
                        type="submit" 
                        className="btn btn-default sign-in-btn form-control"
                        disabled={!this.state.formValid}
                        >Войти
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

SignInFormGroup.propTypes = {
    checkLoginPasswordRequest: React.PropTypes.func.isRequired,
    setCurrentUser: React.PropTypes.func.isRequired
}

SignInFormGroup.contextTypes = {
    router: React.PropTypes.object.isRequired
}