import React from 'react';
import {Modal} from 'react-bootstrap';
export default class CheckAdress extends React.Component{
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
                <button onClick={this.open} id="check-adress-main">ПРОВЕРИТЬ</button>
                <Modal id="checkyouradress" className="modal fade" tabIndex="-1" role="dialog"show={this.state.showModal} onHide={this.close}>
                    <div className="modal-dialog" role="document">
                        <Modal.Body>
                            <h4>Уведомления</h4>
                            <table className='table table-borderless table-condensed table-hover'>
                                <tbody>
                                <tr>
                                    <th>Отключение света <img className="icon-lamp" src={require("../../assets/img/lamp.png")} alt="Иконка для света"/></th>
                                    <th>Сегодня</th>
                                </tr>
                                <tr>
                                    <th> 2 часа <span className="glyphicon glyphicon-time" aria-hidden="true"></span></th>
                                </tr>
                                <tr>
                                    <th className="reason">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Aspernatur aut consectetur cumque eveniet excepturi
                                        explicabo fuga labore neque nulla possimus quas,
                                        quos repellat rerum sapiente tempore tenetur vel velit voluptatibus!
                                    </th>
                                </tr>
                                </tbody>
                            </table>
                            <h2>Вы не авторизованы. Сейчас вам доступно только 1 уведомление</h2>
                            <h3>Возможности авторизованных пользователей:</h3>
                            <ul>
                                <li>Получение всех уведомлений</li>
                                <li>Доступна вкладка "Объявления". Вы будете в курсе всех событий,которые происходят у Вас в доме.
                                </li>
                                <li>Доступна вкладка "Опросы". Вы сможете учавствовать в опосах, которые будут относиться к Вашему
                                    дому
                                </li>
                                <li>Вы сможете сообщать об отключении света, газа и воды остальным жильцам Вашего дома</li>
                                <li>Вам будут доступны настройки профиля,добавление дополнительных адресов, настройки
                                    уведомлений(push или sms)
                                </li>
                            </ul>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="submit" className="login-modal  btn btn-default form-btn-checkadress">Войти</button>
                                <button type="submit" className=" login-modal btn btn-default form-btn-checkadress"> Регистрация
                                </button>
                            </div>
                        </Modal.Footer>
                    </div>
                </Modal>
            </div>
        )
    }
}