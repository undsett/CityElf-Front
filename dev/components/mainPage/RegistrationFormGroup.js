import React from 'react';
import classnames from 'classnames';

export default class RegistrationFormGroup extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: '',
            passwordRepeat: '',
            formErrors: {email: '', password: '', passwordRepeat: ''},
            emailValid: false,
            passwordValid: false,
            passwordRepeatValid: false,
            formValid: false,
            errorUserExist: ''
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
        let passwordRepeatValid = this.state.passwordRepeatValid;

        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'Введите корректный email';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': 'Пароль должен быть не менее 6 символов';
                break;
            case 'passwordRepeat':
                passwordRepeatValid = value.length >= 6 && this.state.password == this.state.passwordRepeat;
                fieldValidationErrors.passwordRepeat = passwordRepeatValid ? '': this.state.password == this.state.passwordRepeat ? 'Пароль должен быть не менее 6 символов' : 'Пароли не совпадают';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid,
                        passwordRepeatValid: passwordRepeatValid
                      }, this.validateForm);
    }

    validateForm() {
        this.setState({
            formValid: this.state.emailValid && this.state.passwordValid && this.state.passwordRepeatValid
        });
    }

    submitForm(e) {
        e.preventDefault();
        if (this.state.formValid) {
            this.setState({
                errorUserExist: ''
            })
            this.props.userSignupRequest(this.state.email, this.state.password).then(
                (response) => {
                    const responseData = JSON.parse(response.text);
                    if(responseData.status.code == 11) {
                        localStorage.setItem('currentUser', JSON.stringify(responseData.user));
                        this.props.setCurrentUser(responseData.user);
                        this.props.closeModal();
                        this.context.router.push('/profile');
                        this.props.showEnterAddressModal();                   
                    } else if(responseData.status.code == 12){
                        this.setState({
                            errorUserExist: responseData.status.message
                        })
                    }
                }        
            );
        }         
    }

    render() {
        const {formErrors} = this.state;
        return(
            <form onSubmit={this.submitForm}>
                <h2>
                    Регистрация
                </h2>
                <div className={classnames("form-group", { 'has-error': formErrors.email || this.state.errorUserExist })}>
                    <input 
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.changeValue} 
                        className="form-control" 
                        placeholder="Email*"
                    />
                    {formErrors.email && <span className="help-block">{formErrors.email}</span>}
                    {this.state.errorUserExist && <span className="help-block">Этот email уже используется</span>}
                </div>    
                <div className={classnames("form-group", { 'has-error': formErrors.password })}>    
                    <input 
                        type="password"
                        name="password" 
                        value={this.state.password}
                        onChange={this.changeValue}
                        className="form-control" 
                        placeholder="Пароль*"
                    />

                    {formErrors.password && <span className="help-block">{formErrors.password}</span>}
                </div>
                <div className={classnames("form-group", { 'has-error': formErrors.passwordRepeat })}>
                    <input
                        type="password"
                        name="passwordRepeat"
                        value={this.state.passwordRepeat}
                        onChange={this.changeValue}
                        className="form-control"
                        placeholder="Повторите пароль*"
                    />

                    {formErrors.passwordRepeat && <span className="help-block">{formErrors.passwordRepeat}</span>}
                </div>
                <div className="form-group">    
                    <button 
                        id="sign-up" 
                        className="btn btn-default form-control"
                        type="submit"                     
                        >Регистрация
                    </button>
                    <div><strong>*-Обязательные для заполнения поля</strong></div>
                </div>
            </form>
        )
    } 
}

RegistrationFormGroup.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    setCurrentUser: React.PropTypes.func.isRequired,
    showEnterAddressModal: React.PropTypes.func.isRequired
}

RegistrationFormGroup.contextTypes = {
    router: React.PropTypes.object.isRequired
}

