import React from 'react';
import {Modal} from 'react-bootstrap';
import SendRequest from "./SendRequest";

export default class AdministratorRoleLink extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        }
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }

    render() {
        return (
        <div>
            <a onClick={this.open}> Получить функции администратора</a>
            <Modal id="administrator-role" class="modal fade" tabIndex="-1" role="dialog"show={this.state.showModal} onHide={this.close}>
                <div className="modal-dialog" role="document">
                    <Modal.Header>
                        <Modal.Title className="modal-title"> Настройки доступа</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h3>Выберите адрес</h3>
                        <input type="text" id="adress-administrator" className=" form-control change-settings-input" placeholder="Адрес"/>
                        <h3>Введите Ваше имя и фамилию </h3>
                        <input type="text" id="administrator-name" className=" form-control change-settings-input" placeholder="Имя и Фамилия"/>
                        <h3>Добавьте документ, подтверждающий Вашу должность</h3>
                        <a href="#">Добавить документ</a>
                    </Modal.Body>
                    <Modal.Footer>
                        <SendRequest closeModal={this.close}/>
                    </Modal.Footer>
                </div>
            </Modal>
        </div>
        )
    }
    }