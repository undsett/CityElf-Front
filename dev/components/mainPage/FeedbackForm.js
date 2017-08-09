import React from 'react';
import { Modal } from 'react-bootstrap';
import classnames from 'classnames';

import SendUsLetterButton from "./SendUsLetterButton";

export default class FeedbackForm extends React.Component {
    constructor() {
        super();

        this.state = {
            userName: '',
            email: '',
            theme: '',
            message: '',
            formErrors: {userName: '', email: '', theme: '', message: ''},
            userNameValid: false,
            emailValid: false,
            themeValid: false,
            messageValid: false,
            formValid: false,
            serverResponseError: false
        }
        this.changeValue = this.changeValue.bind(this); 
        this.submitForm = this.submitForm.bind(this);       
    }

    changeValue(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(
            {[name]: value},
            () => { this.validateField(name, value) }
        );
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let userNameValid = this.state.userNameValid;
        let emailValid = this.state.emailValid;
        let themeValid = this.state.themeValid;
        let messageValid = this.state.messageValid;


        switch(fieldName) {
            case 'userName':
                userNameValid = value.length > 1 && value.length < 100;
                fieldValidationErrors.userName = userNameValid ? '': 'Введите от 1 до 100 символов';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'Введите корректный email';
                break;
            case 'theme':
                themeValid = value.length > 1 && value.length < 255;
                fieldValidationErrors.theme = themeValid ? '': 'Введите от 1 до 255 символов';
                break;
            case 'message':
                messageValid = value.length > 10 && value.length < 1000;
                fieldValidationErrors.message = messageValid ? '': 'Введите от 10 до 1000 символов';
                break;    
            default:
                break;
        }

        this.setState({
            formErrors: fieldValidationErrors,
            userNameValid: userNameValid,
            emailValid: emailValid,
            themeValid: themeValid,
            messageValid: messageValid
        }, this.validateForm
        );
    }

    validateForm() {
        this.setState({
            formValid: this.state.userNameValid && this.state.emailValid && this.state.themeValid && this.state.messageValid 
        });
    }

    submitForm(e) {
        e.preventDefault();
        console.log("1")
        this.props.feedBackRequest(this.state.userName, this.state.email, this.state.theme, this.state.message).then(
            (response) => {
                this.setState({
                    userName: '',
                    email: '',
                    theme: '',
                    message: ''
                })
            },
            (error) => {
                console.log("2")
                this.setState({
                    serverResponseError: true,
                    userName: '',
                    email: '',
                    theme: '',
                    message: ''
                })
            }
        );        
    }

    render() {
        const {formErrors} = this.state;
        return (
            <Modal id="modal-write-us"  className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog"
                   aria-labelledby="myLargeModalLabel" aria-hidden="true" show={this.props.showModal} onHide={this.props.closeModal}>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <form onSubmit={this.submitForm}>
                        <h2>Обратная связь</h2>
                        <div className="modal-contact">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className={classnames("form-group", { 'has-error': formErrors.userName })}>   
                                        <input 
                                            type="text" 
                                            name="userName"
                                            value={this.state.userName}
                                            onChange={this.changeValue}
                                            className="form-control" 
                                            placeholder="Ваше имя"
                                        />
                                        {formErrors.userName && <span className="help-block">{formErrors.userName}</span>}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                     <div className={classnames("form-group", { 'has-error': formErrors.email })}>
                                        <input 
                                            type="email"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.changeValue}
                                            className="form-control" 
                                            placeholder="Email"
                                        />
                                        {formErrors.email && <span className="help-block">{formErrors.email}</span>}
                                    </div>
                                </div>
                            </div>
                            <div className={classnames("form-group", { 'has-error': formErrors.theme })}>
                                <input 
                                    type="text"
                                    name="theme"
                                    value={this.state.theme}
                                    onChange={this.changeValue} 
                                    className="form-control" 
                                    placeholder="Тема сообщения"
                                />
                                {formErrors.theme && <span className="help-block">{formErrors.theme}</span>}
                            </div>
                            <div className={classnames("form-group", { 'has-error': formErrors.message })}>   
                                <textarea
                                    name="message"
                                    value={this.state.message}
                                    onChange={this.changeValue} 
                                    className="form-control" 
                                    id="exampleTextarea" 
                                    rows="3" 
                                    placeholder="Текст сообщения"
                                />
                                {formErrors.message && <span className="help-block">{formErrors.message}</span>}
                            </div>
                            <SendUsLetterButton formValid={this.state.formValid} closeModal={this.props.closeModal} serverResponseError={this.state.serverResponseError} />
                        </div>
                    </form>    
                </Modal.Body>
            </Modal>
        )
    }
}

FeedbackForm.propTypes = {
    feedBackRequest: React.PropTypes.func.isRequired
}