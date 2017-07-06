import React from 'react';

export default class CheckAdress extends React.Component{
    render() {
        return (
            <div className="modal fade" tabIndex="-1" role="dialog" id="checkyouradress">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
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
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="submit" className="login-modal  btn btn-default form-btn-checkadress">Войти</button>
                                <button type="submit" className=" login-modal btn btn-default form-btn-checkadress"> Регистрация
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}