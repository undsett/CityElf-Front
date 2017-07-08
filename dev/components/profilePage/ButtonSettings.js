import React from 'react';
import { Modal } from 'react-bootstrap';
import '../../assets/css/profilepage.scss';
export default class ButtonSettings extends React.Component{
    constructor() {
        super();

        this.state = {
            showModal: false
        }
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }
    render() {
        return (
            <div>
            <div>
            <button onClick={this.open} id="settings-profile" type="submit" className="btn btn-default">Настройки
            </button>
            </div>
                <div id="settings-change-info">
                <Modal class="modal fade" tabindex="-1" role="dialog" show={this.state.showModal} onHide={this.close}>
            <div className="modal-dialog" role="document">
                <Modal.Header>
                    <Modal.Title>
                         <h4 className="modal-title">Настройки</h4>
                    </Modal.Title>
                </Modal.Header>
            </div>
                <Modal.Body>
                <h3>Электронная почта</h3>
                <p id="email-user-settings">iva******@gmail.com</p>
                <a id="link-change-email" href="#">Изменить электронную почту</a>
                <input type="email" id="change-email" className="hidden form-control change-settings-input" placeholder="Email"/>

                <h3>Пароль</h3>
                <a id="link-change-password" href="#">Изменить пароль</a>

                <input type="password" id="change-password" className="hidden form-control change-settings-input" placeholder="Введите новый пароль"/>

                <h3>Текущий адрес</h3>
                <p id=""user-current-adress>Дерибасовская 14</p>
                <a id="link-change-address" href="#">Изменить адрес</a>

                <input type="text" id="change-address" className="hidden form-control change-settings-input" placeholder="Введите новый адрес"/>

                <h3>Дополнительный адрес</h3>
                <a id="link-add-address" href="#">Добавить адрес</a>
                <input type="text" id="add-adress-settings" className="hidden form-control change-settings-input" placeholder="Введите адрес"/>

                <h3 id="settings-type-notification">Тип уведомления</h3>
                <ul className="type-of-notifications">
                    <li className="list-group-item">
                        Email
                        <div className="material-switch pull-right">
                            <input id="someSwitchOptionDefault" name="someSwitchOption001"
                                   type="checkbox"/>
                            <label for="someSwitchOptionDefault" className="label-default"></label>
                        </div>
                    </li>
                    <li className="list-group-item">
                        Sms
                        <div className="material-switch pull-right">
                            <input id="SwitchOptionSms" name="SwitchOptionSms" type="checkbox"/>
                            <label for="SwitchOptionSms" className="label-default"></label>
                        </div>
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