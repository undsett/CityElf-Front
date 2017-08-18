import React from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { showSettingsModal, hideSettingsModal } from '../../actions/userActions';

class ButtonSettings extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            emailInputShown: false,
            passwordInputShow: false,
            currentAddressInputShow: false,
            addAddressInputShow: false,
            newEmail: "",
            newPassword: "",
            formErrors: {newEmail: '', newPassword: ''},
            newEmailValid: true,
            newPasswordValid: true,
            formValid: true,
            newCurrentAddress: "",
            addAddress: "",
            notifEmail: this.props.authorization.userData.notification.email,
            notifSms: this.props.authorization.userData.notification.sms
        }
        this.showInput = this.showInput.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.changeNotif = this.changeNotif.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    showInput(e) {
        const name = e.target.getAttribute('name');
        this.setState({
            [name]: !this.state[name]
        })
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
        let newEmailValid = this.state.newEmailValid;
        let newPasswordValid = this.state.newPasswordValid;
        switch(fieldName) {
            case 'newEmail':
                newEmailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.newEmail = newEmailValid ? '' : 'Введите корректный email';
                break;
            case 'newPassword':
                newPasswordValid = value.length >= 6;
                fieldValidationErrors.newPassword = newPasswordValid ? '': 'Пароль должен быть не менее 6 символов';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        newEmailValid: newEmailValid,
                        newPasswordValid: newPasswordValid
                      }, this.validateForm);
    }

    validateForm() {
        this.setState({
            formValid: this.state.newEmailValid && this.state.newPasswordValid
        });
    }

    changeNotif(e) {
        const name = e.target.name;
        const value = e.target.checked;
        this.setState({
            [name]: value
        });
    }

    submitForm(e) {
        e.preventDefault();
        if (this.state.formValid) {
            console.log("форма валидна, запрос на сервер", this.state);
        } else {
            console.log("форма не валидна")
        }
    }

    render() {
        const { formErrors } = this.state;
        const { isShownSettingsModal } = this.props.userReducer;
        const { userData } = this.props.authorization;
        const InputEmail = (
            <div className={classnames("form-group", { 'has-error': formErrors.newEmail })}>
                <input 
                    type="email"
                    id="change-email" 
                    className=" form-control change-settings-input" 
                    placeholder="Введите новый email"
                    name="newEmail"
                    value={this.state.newEmail}
                    onChange={this.changeValue} 
                />
                {formErrors.newEmail && <span className="help-block">{formErrors.newEmail}</span>}
            </div>    
        );
        const InputPassword = (
            <div className={classnames("form-group", { 'has-error': formErrors.newPassword })}>
                <input 
                    type="password" 
                    id="change-password" 
                    className="form-control change-settings-input" 
                    placeholder="Введите новый пароль"
                    name="newPassword"
                    value={this.state.newPassword}
                    onChange={this.changeValue} 
                />
                {formErrors.newPassword && <span className="help-block">{formErrors.newPassword}</span>}
            </div> 
        );
        const InputCurrentAddress = ( 
            <input 
                type="text" 
                id="change-address" 
                className=" form-control change-settings-input" 
                placeholder="Введите новый адрес"
                name="newCurrentAddress"
                value={this.state.newCurrentAddress}
                onChange={this.changeValue} 
            />
        );
        const InputAddAddress = (
            <input 
                type="text" 
                id="add-adress-settings" 
                className=" form-control change-settings-input" 
                placeholder="Введите адрес"
                name="addAddress"
                value={this.state.addAddress}
                onChange={this.changeValue} 
            />
        );
        return (
            <div>
                <div>
                    <button 
                        onClick={this.props.showSettingsModal} 
                        id="settings-profile" 
                        type="submit" 
                        className="btn btn-default"
                    >Настройки
                    </button>
                </div>
                <Modal className="modal fade" tabIndex="-1" role="dialog" show={isShownSettingsModal} onHide={this.props.hideSettingsModal}>
                    <div role="document">
                        <Modal.Header closeButton className="settings-header">
                            <Modal.Title className="modal-title-settings">
                                Настройки
                            </Modal.Title>
                       </Modal.Header>
                    </div>
                    <Modal.Body id="settings-change-info">
                        <form onSubmit={this.submitForm}>
                            <h3>Электронная почта</h3>
                            <p id="email-user-settings">{userData.email}</p>
                            <div 
                                role="link" 
                                id="link-change-email" 
                                className="link-change-info"
                                name="emailInputShown" 
                                onClick={this.showInput}
                            >Изменить электронную почту
                            </div>
                            { this.state.emailInputShown ? InputEmail : null }
                            <h3>Пароль</h3>
                            <div 
                                role="link" 
                                id="link-change-email" 
                                className="link-change-info"
                                name="passwordInputShow"  
                                onClick={this.showInput}
                            >Изменить пароль
                            </div>
                            { this.state.passwordInputShow ? InputPassword : null }
                            <h3>Текущий адрес</h3>
                            <p id="user-current-adress">{userData.addresses.length > 0 ? userData.addresses[0].address : ''}</p>
                            <div 
                                role="link" 
                                id="link-change-email" 
                                className="link-change-info"
                                name="currentAddressInputShow"  
                                onClick={this.showInput}
                            >Изменить адрес
                            </div>
                            { this.state.currentAddressInputShow ? InputCurrentAddress : null }
                            <h3>Дополнительный адрес</h3>
                            <div 
                                role="link" 
                                id="link-change-email"
                                className="link-change-info"
                                name="addAddressInputShow" 
                                onClick={this.showInput}
                            >Добавить адрес
                            </div>
                            { this.state.addAddressInputShow ? InputAddAddress : null }
                            <h3 id="settings-type-notification">Тип уведомления</h3>
                            <ul className="type-of-notifications">
                                <li className="list-group-item">
                                    Email
                                    <label className="switch badge">
                                        <input 
                                            type="checkbox"
                                            name="notifEmail" 
                                            checked={this.state.notifEmail}
                                            onChange={this.changeNotif}/>
                                        <span className="slider round"></span>
                                    </label>
                                </li>
                                <li className="list-group-item">
                                    Sms
                                    <label className="switch badge">
                                        <input 
                                            type="checkbox"
                                            name="notifSms" 
                                            checked={this.state.notifSms}
                                            onChange={this.changeNotif}
                                        />
                                        <span className="slider round"></span>
                                    </label>
                                </li>
                            </ul>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-default" data-dismiss="modal">Сохранить</button>
                            </div>
                        </form> 
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

ButtonSettings.propTypes = {
    userReducer: React.PropTypes.object.isRequired,
    showSettingsModal: React.PropTypes.func.isRequired,
    hideSettingsModal: React.PropTypes.func.isRequired,
    authorization: React.PropTypes.object.isRequired
}

function mapStateToProps (state) {
    return {
        userReducer: state.userReducer,
        authorization: state.authorization
    }
}

export default connect(mapStateToProps, { showSettingsModal, hideSettingsModal })(ButtonSettings);