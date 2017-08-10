import React from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';

import { showSettingsModal, hideSettingsModal } from '../../actions/userActions';

var Child = React.createClass({
    render: function() {
        return (
            <input type="email" id="change-email" className=" form-control change-settings-input" placeholder="Email"/>

        );
    }
});

var ShowHideEmailChange = React.createClass({
    getInitialState: function () {
        return { childVisible: false };
    },

    render: function() {
        return(
            <div>
                <div role="link" id="link-change-email" className="link-change-info"  onClick={this.onClick}>
                    Изменить электронную почту
                </div>
                {
                    this.state.childVisible
                        ? <Child />
                        : null
                }
            </div>
        )
    },

    onClick: function() {
        this.setState({childVisible: !this.state.childVisible});
    }
});

var ChildPassword = React.createClass({
    render: function() {
        return (
            <input type="password" id="change-password" className="form-control change-settings-input" placeholder="Введите новый пароль"/>

        );
    }
});

var ShowHidePasswordChange = React.createClass({
    getInitialState: function () {
        return { ChildPasswordVisible: false };
    },

    render: function() {
        return(
            <div>
                <div role="link" id="link-change-email" className="link-change-info"  onClick={this.onClick}>
                    Изменить пароль
                </div>
                {
                    this.state.ChildPasswordVisible
                        ? <ChildPassword />
                        : null
                }
            </div>
        )
    },

    onClick: function() {
        this.setState({ChildPasswordVisible: !this.state.ChildPasswordVisible});
    }
});
var ChildAddress = React.createClass({
    render: function() {
        return (
            <input type="text" id="change-address" className=" form-control change-settings-input" placeholder="Введите новый адрес"/>

        );
    }
});

var ShowHideAddressChange = React.createClass({
    getInitialState: function () {
        return { ChildAddressVisible: false };
    },

    render: function() {
        return(
            <div>
                <div role="link" id="link-change-email" className="link-change-info"  onClick={this.onClick}>
                    Изменить адрес
                </div>
                {
                    this.state.ChildAddressVisible
                        ? <ChildAddress/>
                        : null
                }
            </div>
        )
    },

    onClick: function() {
        this.setState({ChildAddressVisible: !this.state.ChildAddressVisible});
    }
});

var ChildAddAddress = React.createClass({
    render: function() {
        return (
            <input type="text" id="add-adress-settings" className=" form-control change-settings-input" placeholder="Введите адрес"/>
        );
    }
});

var ShowHideAddressAdd = React.createClass({
    getInitialState: function () {
        return { ChildAddAddressVisible: false };
    },

    render: function() {
        return(
            <div>
                <div role="link" id="link-change-email" className="link-change-info"  onClick={this.onClick}>
                    Добавить адрес
                </div>
                {
                    this.state.ChildAddAddressVisible
                        ? <ChildAddAddress/>
                        : null
                }
            </div>
        )
    },

    onClick: function() {
        this.setState({ChildAddAddressVisible: !this.state.ChildAddAddressVisible});
    }
});

class ButtonSettings extends React.Component{
    render() {
        const { isShownSettingsModal } = this.props.userReducer;
        return (
            <div>
                <div>
                    <button onClick={this.props.showSettingsModal} id="settings-profile" type="submit" className="btn btn-default">Настройки
                    </button>
                </div>
                <div>
                    <Modal className="modal fade" tabIndex="-1" role="dialog" show={isShownSettingsModal} onHide={this.props.hideSettingsModal}>
                        <div role="document">
                            <Modal.Header>
                                <Modal.Title className="modal-title-settings">
                                    Настройки
                                </Modal.Title>
                            </Modal.Header>
                        </div>
                        <Modal.Body id="settings-change-info">
                            <h3>Электронная почта</h3>
                            <p id="email-user-settings" >iva******@gmail.com</p>
                            <ShowHideEmailChange/>
                            <h3>Пароль</h3>
                            <ShowHidePasswordChange/>

                            <h3>Текущий адрес</h3>
                            <p id="user-current-adress">Дерибасовская 14</p>
                            <ShowHideAddressChange/>


                            <h3>Дополнительный адрес</h3>
                            <ShowHideAddressAdd />

                            <h3 id="settings-type-notification">Тип уведомления</h3>
                            <ul className="type-of-notifications">
                                <li className="list-group-item">
                                    Email
                                    <label className="switch badge">
                                        <input type="checkbox"/>
                                        <span className="slider round"></span>
                                    </label>

                                </li>
                                <li className="list-group-item">
                                    Sms
                                    <label className="switch badge">
                                        <input type="checkbox"/>
                                        <span className="slider round"></span>
                                    </label>
                                </li>
                            </ul>
                            <h3>Язык</h3>
                            <div className="choose-language">
                                <label className="radio-inline"><input type="radio" name="optradio"/>Русский</label>
                                <label className="radio-inline"><input type="radio" name="optradio"/>Украинский</label>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Сохранить</button>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>


            </div>
        )
    }
}

ButtonSettings.propTypes = {
    userReducer: React.PropTypes.object.isRequired,
    showSettingsModal: React.PropTypes.func.isRequired,
    hideSettingsModal: React.PropTypes.func.isRequired
}

function mapStateToProps (state) {
    return {
        userReducer: state.userReducer
    }
}

export default connect(mapStateToProps, { showSettingsModal, hideSettingsModal })(ButtonSettings);