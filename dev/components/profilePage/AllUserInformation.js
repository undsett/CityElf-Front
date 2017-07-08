import React from 'react';
import ButtonSettings from "./ButtonSettings";
import {Modal} from 'react-bootstrap';

export default class AllUserInformation extends React.Component {
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
            <section className="user-notifacations">
                <div className="container center">
                    <div className="row">

                        <div id="nofication-block" className="col-md-8 col-sm-7 info-service-panel">

                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation" className="active"><a href="#notifications"
                                                                              aria-controls="notifications"
                                                                              role="tab"
                                                                              data-toggle="tab">Уведомления</a></li>
                                <li role="presentation"><a href="#notice" aria-controls="notice " role="tab"
                                                           data-toggle="tab">Обьявления</a>
                                </li>
                                <li role="presentation"><a href="#interview" aria-controls="interview" role="tab"
                                                           data-toggle="tab">Опросы</a></li>
                            </ul>

                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane active" id="notifications">

                                    <table className='table table-borderless table-condensed table-hover'>
                                        <tbody>
                                        <tr>
                                            <th>Отключение света <img className="icon-lamp"
                                                                      src={require("../../assets/img/lamp.png")}
                                                                      alt="Иконка для света"/></th>
                                            <th>Сегодня</th>
                                        </tr>
                                        <tr>
                                            <th> 2 часа <span className="glyphicon glyphicon-time"
                                                              aria-hidden="true"></span></th>

                                        </tr>
                                        <tr>
                                            <th className="reason">Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit.
                                                Aspernatur aut consectetur cumque eveniet excepturi
                                                explicabo fuga labore neque nulla possimus quas,
                                                quos repellat rerum sapiente tempore tenetur vel velit voluptatibus!
                                            </th>

                                        </tr>
                                        </tbody>
                                        <tbody>
                                        <tr>
                                            <th>Отключение газа <img className="icon-gas"
                                                                     src={require("../../assets/img/gas.png")}
                                                                     alt="Иконка для газа"/></th>
                                            <th>14.05.2017</th>
                                        </tr>
                                        <tr>
                                            <th> 3 часа <span className="glyphicon glyphicon-time"
                                                              aria-hidden="true"></span></th>

                                        </tr>
                                        <tr>
                                            <th className="reason">Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit.
                                                Aspernatur aut consectetur cumque eveniet excepturi
                                                explicabo fuga labore neque nulla possimus quas,
                                                quos repellat rerum sapiente tempore tenetur vel velit voluptatibus!
                                            </th>

                                        </tr>
                                        </tbody>
                                        <tbody>
                                        <tr>
                                            <th>Отключение газа <img className="icon-gas"
                                                                     src={require("../../assets/img/gas.png")}
                                                                     alt="Иконка для газа"/></th>
                                            <th>14.05.2017</th>
                                        </tr>
                                        <tr>
                                            <th> 3 часа <span className="glyphicon glyphicon-time"
                                                              aria-hidden="true"></span></th>

                                        </tr>
                                        <tr>
                                            <th className="reason">Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit.
                                                Aspernatur aut consectetur cumque eveniet excepturi
                                                explicabo fuga labore neque nulla possimus quas,
                                                quos repellat rerum sapiente tempore tenetur vel velit voluptatibus!
                                            </th>
                                        </tr>
                                        </tbody>
                                        <tbody>
                                        <tr>
                                            <th>Отключение воды <img className="icon-water"
                                                                     src={require("../../assets/img/water.png")}
                                                                     alt="Иконка для воды"/></th>
                                            <th>14.05.2017</th>
                                        </tr>
                                        <tr>
                                            <th> 3 часа <span className="glyphicon glyphicon-time"
                                                              aria-hidden="true"></span></th>

                                        </tr>
                                        <tr>
                                            <th className="


                                            reason">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Aspernatur aut consectetur cumque eveniet excepturi
                                                explicabo fuga labore neque nulla possimus quas,
                                                quos repellat rerum sapiente tempore tenetur vel velit voluptatibus!
                                            </th>

                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="notice">
                                    <table className='table table-borderless table-condensed table-hover'>
                                        <tbody>
                                        <tr>
                                            <th>Lorem ipsum dolor sit amet</th>
                                            <th>Сегодня</th>
                                        </tr>
                                        <tr>
                                            <th>Улица дерибасовская 14</th>
                                        </tr>
                                        <tr>
                                            <th className="comment more">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Aliquid autem, beatae consequuntur debitis dignissimos earum eligendi
                                                ipsa iusto
                                                laboriosam,
                                                quia rem repellat veniam vero? Explicabo id quas reiciendis ullam
                                                veniam!lorem
                                                Lorem ipsum dolor
                                                sit amet, consectetur adipisicing elit. Impedit, provident repudiandae.
                                                Aliquam
                                                distinctio ducimus
                                                esse explicabo in libero, nulla officiis praesentium sint vero! Deserunt
                                                eos
                                                exercitationem facilis
                                                perferendis sed temporibus?
                                                <br/>
                                                <br/>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Aliquid autem, beatae consequuntur debitis dignissimos earum eligendi
                                                ipsa iusto
                                                laboriosam,
                                                quia rem repellat veniam vero? Explicabo id quas reiciendis ullam
                                                veniam!lorem
                                                Lorem ipsum dolor
                                                sit amet, consectetur adipisicing elit. Impedit, provident repudiandae.
                                                Aliquam
                                                distinctio ducimus
                                                esse explicabo in libero, nulla officiis praesentium sint vero! Deserunt
                                                eos
                                                exercitationem facilis
                                                perferendis sed temporibus?
                                                <br/>
                                                <br/>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Aliquid autem, beatae consequuntur debitis dignissimos earum eligendi
                                                ipsa iusto
                                                laboriosam,
                                                quia rem repellat veniam vero? Explicabo id quas reiciendis ullam
                                                veniam!lorem
                                                Lorem ipsum dolor
                                                sit amet, consectetur adipisicing elit. Impedit, provident repudiandae.
                                                Aliquam
                                                distinctio ducimus
                                                esse explicabo in libero, nulla officiis praesentium sint vero! Deserunt
                                                eos
                                                exercitationem facilis
                                                perferendis sed temporibus?
                                            </th>

                                        </tr>
                                        </tbody>
                                        <tbody>
                                        <tr>
                                            <th>Lorem ipsum dolor sit amet</th>
                                            <th>Сегодня</th>
                                        </tr>
                                        <tr>
                                            <th>Улица дерибасовская 14</th>
                                        </tr>
                                        <tr>
                                            <th className="comment more">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Aliquid autem, beatae consequuntur debitis dignissimos earum eligendi
                                                ipsa iusto
                                                laboriosam,
                                                quia rem repellat veniam vero? Explicabo id quas reiciendis ullam
                                                veniam!lorem
                                                Lorem ipsum dolor
                                                sit amet, consectetur adipisicing elit. Impedit, provident repudiandae.
                                                Aliquam
                                                distinctio ducimus
                                                esse explicabo in libero, nulla officiis praesentium sint vero! Deserunt
                                                eos
                                                exercitationem facilis
                                                perferendis sed temporibus?
                                                <br/>
                                                <br/>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Aliquid autem, beatae consequuntur debitis dignissimos earum eligendi
                                                ipsa iusto
                                                laboriosam,
                                                quia rem repellat veniam vero? Explicabo id quas reiciendis ullam
                                                veniam!lorem
                                                Lorem ipsum dolor
                                                sit amet, consectetur adipisicing elit. Impedit, provident repudiandae.
                                                Aliquam
                                                distinctio ducimus
                                                esse explicabo in libero, nulla officiis praesentium sint vero! Deserunt
                                                eos
                                                exercitationem facilis
                                                perferendis sed temporibus?
                                                <br/>
                                                <br/>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Aliquid autem, beatae consequuntur debitis dignissimos earum eligendi
                                                ipsa iusto
                                                laboriosam,
                                                quia rem repellat veniam vero? Explicabo id quas reiciendis ullam
                                                veniam!lorem
                                                Lorem ipsum dolor
                                                sit amet, consectetur adipisicing elit. Impedit, provident repudiandae.
                                                Aliquam
                                                distinctio ducimus
                                                esse explicabo in libero, nulla officiis praesentium sint vero! Deserunt
                                                eos
                                                exercitationem facilis
                                                perferendis sed temporibus?
                                            </th>

                                        </tr>
                                        </tbody>
                                        <tbody>
                                        <tr>
                                            <th>Lorem ipsum dolor sit amet</th>
                                            <th>Сегодня</th>
                                        </tr>
                                        <tr>
                                            <th>Улица дерибасовская 14</th>
                                        </tr>
                                        <tr>
                                            <th className="comment more">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Aliquid autem, beatae consequuntur debitis dignissimos earum eligendi
                                                ipsa iusto
                                                laboriosam,
                                                quia rem repellat veniam vero? Explicabo id quas reiciendis ullam
                                                veniam!lorem
                                                Lorem ipsum dolor
                                                sit amet, consectetur adipisicing elit. Impedit, provident repudiandae.
                                                Aliquam
                                                distinctio ducimus
                                                esse explicabo in libero, nulla officiis praesentium sint vero! Deserunt
                                                eos
                                                exercitationem facilis
                                                perferendis sed temporibus?
                                                <br/>
                                                <br/>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Aliquid autem, beatae consequuntur debitis dignissimos earum eligendi
                                                ipsa iusto
                                                laboriosam,
                                                quia rem repellat veniam vero? Explicabo id quas reiciendis ullam
                                                veniam!lorem
                                                Lorem ipsum dolor
                                                sit amet, consectetur adipisicing elit. Impedit, provident repudiandae.
                                                Aliquam
                                                distinctio ducimus
                                                esse explicabo in libero, nulla officiis praesentium sint vero! Deserunt
                                                eos
                                                exercitationem facilis
                                                perferendis sed temporibus?
                                                <br/>
                                                <br/>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Aliquid autem, beatae consequuntur debitis dignissimos earum eligendi
                                                ipsa iusto
                                                laboriosam,
                                                quia rem repellat veniam vero? Explicabo id quas reiciendis ullam
                                                veniam!lorem
                                                Lorem ipsum dolor
                                                sit amet, consectetur adipisicing elit. Impedit, provident repudiandae.
                                                Aliquam
                                                distinctio ducimus
                                                esse explicabo in libero, nulla officiis praesentium sint vero! Deserunt
                                                eos
                                                exercitationem facilis
                                                perferendis sed temporibus?
                                            </th>

                                        </tr>
                                        </tbody>
                                    </table>
                                </div>


                                <div role="tabpanel" className="tab-pane" id="interview">
                                    <table className='table table-borderless table-condensed table-hover'>
                                        <tbody>
                                        <tr>
                                            <th>Опрос#1</th>
                                            <th>Сегодня</th>
                                        </tr>
                                        <tr>
                                            <th>Улица дерибасовская 14</th>
                                        </tr>
                                        <tr>
                                            <th className="comment moreadv">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Aliquid autem, beatae consequuntur debitis dignissimos earum eligendi
                                                ipsa iusto
                                                laboriosam,
                                                quia rem repellat veniam vero? Explicabo id quas reiciendis ullam
                                                veniam!lorem
                                                Lorem ipsum dolor
                                                sit amet, consectetur adipisicing elit. Impedit, provident repudiandae.
                                                Aliquam
                                                distinctio ducimus
                                                esse explicabo in libero, nulla officiis praesentium sint vero! Deserunt
                                                eos
                                                exercitationem facilis
                                                perferendis sed temporibus?
                                                <br/>
                                                <br/>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Aliquid autem, beatae consequuntur debitis dignissimos earum eligendi
                                                ipsa iusto
                                                laboriosam,
                                                quia rem repellat veniam vero? Explicabo id quas reiciendis ullam
                                                veniam!lorem
                                                Lorem ipsum dolor
                                                sit amet, consectetur adipisicing elit. Impedit, provident repudiandae.
                                                Aliquam
                                                distinctio ducimus
                                                esse explicabo in libero, nulla officiis praesentium sint vero! Deserunt
                                                eos
                                                exercitationem facilis
                                                perferendis sed temporibus?
                                                <br/>
                                                <br/>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Aliquid autem, beatae consequuntur debitis dignissimos earum eligendi
                                                ipsa iusto
                                                laboriosam,
                                                quia rem repellat veniam vero? Explicabo id quas reiciendis ullam
                                                veniam!lorem
                                                Lorem ipsum dolor
                                                sit amet, consectetur adipisicing elit. Impedit, provident repudiandae.
                                                Aliquam
                                                distinctio ducimus
                                                esse explicabo in libero, nulla officiis praesentium sint vero! Deserunt
                                                eos
                                                exercitationem facilis
                                                perferendis sed temporibus?
                                                <div className="radio">
                                                    <label><input type="radio" name="optradio"/>Option 1</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="optradio"/>Option 2</label>
                                                </div>
                                                <div className="radio disabled">
                                                    <label><input type="radio" name="optradio" disabled/>Option
                                                        3</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="optradio"/>Option 4</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="optradio"/>Option 5</label>
                                                </div>
                                                <div className="radio disabled">
                                                    <label><input type="radio" name="optradio" disabled/>Option
                                                        6</label>
                                                </div>
                                                <p>Проголосовало <span>23</span> человека из вашего дома</p>
                                                <button type="submit"
                                                        className="btn btn-default form-btn-contactus interview">
                                                    Проголосовать
                                                </button>

                                            </th>
                                        </tr>
                                        </tbody>
                                        <tbody>
                                        <tr>
                                            <th>Опрос#2</th>
                                            <th>Сегодня</th>
                                        </tr>
                                        <tr>
                                            <th>Улица дерибасовская 14</th>
                                        </tr>
                                        <tr>
                                            <th className="comment moreadv">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Aliquid autem, beatae consequuntur debitis dignissimos earum eligendi
                                                ipsa iusto
                                                laboriosam,
                                                quia rem repellat veniam vero? Explicabo id quas reiciendis ullam
                                                veniam!lorem
                                                Lorem ipsum dolor
                                                sit amet, consectetur adipisicing elit. Impedit, provident repudiandae.
                                                Aliquam
                                                distinctio ducimus
                                                esse explicabo in libero, nulla officiis praesentium sint vero! Deserunt
                                                eos
                                                exercitationem facilis
                                                perferendis sed temporibus?
                                                <br/>
                                                <br/>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Aliquid autem, beatae consequuntur debitis dignissimos earum eligendi
                                                ipsa iusto
                                                laboriosam,
                                                quia rem repellat veniam vero? Explicabo id quas reiciendis ullam
                                                veniam!lorem
                                                Lorem ipsum dolor
                                                sit amet, consectetur adipisicing elit. Impedit, provident repudiandae.
                                                Aliquam
                                                distinctio ducimus
                                                esse explicabo in libero, nulla officiis praesentium sint vero! Deserunt
                                                eos
                                                exercitationem facilis
                                                perferendis sed temporibus?
                                                <br/>
                                                <br/>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Aliquid autem, beatae consequuntur debitis dignissimos earum eligendi
                                                ipsa iusto
                                                laboriosam,
                                                quia rem repellat veniam vero? Explicabo id quas reiciendis ullam
                                                veniam!lorem
                                                Lorem ipsum dolor
                                                sit amet, consectetur adipisicing elit. Impedit, provident repudiandae.
                                                Aliquam
                                                distinctio ducimus
                                                esse explicabo in libero, nulla officiis praesentium sint vero! Deserunt
                                                eos
                                                exercitationem facilis
                                                perferendis sed temporibus?
                                                <div className="radio">
                                                    <label><input type="radio" name="optradio"/>Option 1</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="optradio"/>Option 2</label>
                                                </div>
                                                <div className="radio disabled">
                                                    <label><input type="radio" name="optradio" disabled/>Option
                                                        3</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="optradio"/>Option 4</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="optradio"/>Option 5</label>
                                                </div>
                                                <div className="radio disabled">
                                                    <label><input type="radio" name="optradio" disabled/>Option
                                                        6</label>
                                                </div>
                                                <p>Проголосовало <span>23</span> человека из вашего дома</p>
                                                <button type="submit"
                                                        className="btn btn-default form-btn-contactus interview">
                                                    Проголосовать
                                                </button>

                                            </th>

                                        </tr>
                                        </tbody>
                                        <tbody>
                                        <tr>
                                            <th>Опрос#3</th>
                                            <th>Сегодня</th>
                                        </tr>
                                        <tr>
                                            <th>Улица дерибасовская 14</th>
                                        </tr>
                                        <tr>
                                            <th className="comment moreadv">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Aliquid autem, beatae consequuntur debitis dignissimos earum eligendi
                                                ipsa iusto
                                                laboriosam,
                                                quia rem repellat veniam vero? Explicabo id quas reiciendis ullam
                                                veniam!lorem
                                                Lorem ipsum dolor
                                                sit amet, consectetur adipisicing elit. Impedit, provident repudiandae.
                                                Aliquam
                                                distinctio ducimus
                                                esse explicabo in libero, nulla officiis praesentium sint vero! Deserunt
                                                eos
                                                exercitationem facilis
                                                perferendis sed temporibus?
                                                <br/>
                                                <br/>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Aliquid autem, beatae consequuntur debitis dignissimos earum eligendi
                                                ipsa iusto
                                                laboriosam,
                                                quia rem repellat veniam vero? Explicabo id quas reiciendis ullam
                                                veniam!lorem
                                                Lorem ipsum dolor
                                                sit amet, consectetur adipisicing elit. Impedit, provident repudiandae.
                                                Aliquam
                                                distinctio ducimus
                                                esse explicabo in libero, nulla officiis praesentium sint vero! Deserunt
                                                eos
                                                exercitationem facilis
                                                perferendis sed temporibus?
                                                <br/>
                                                <br/>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Aliquid autem, beatae consequuntur debitis dignissimos earum eligendi
                                                ipsa iusto
                                                laboriosam,
                                                quia rem repellat veniam vero? Explicabo id quas reiciendis ullam
                                                veniam!lorem
                                                Lorem ipsum dolor
                                                sit amet, consectetur adipisicing elit. Impedit, provident repudiandae.
                                                Aliquam
                                                distinctio ducimus
                                                esse explicabo in libero, nulla officiis praesentium sint vero! Deserunt
                                                eos
                                                exercitationem facilis
                                                perferendis sed temporibus?
                                                <div className="radio">
                                                    <label><input type="radio" name="optradio"/>Option 1</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="optradio"/>Option 2</label>
                                                </div>
                                                <div className="radio disabled">
                                                    <label><input type="radio" name="optradio" disabled/>Option
                                                        3</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="optradio"/>Option 4</label>
                                                </div>
                                                <div className="radio">
                                                    <label><input type="radio" name="optradio"/>Option 5</label>
                                                </div>
                                                <div className="radio disabled">
                                                    <label><input type="radio" name="optradio" disabled/>Option
                                                        6</label>
                                                </div>
                                                <p>Проголосовало <span>23</span> человека из вашего дома</p>
                                                <button type="submit" className="btn btn-default interview ">
                                                    Проголосовать
                                                </button>

                                            </th>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4 col-sm-5 user-profile sidebar" id="sticky">

                            <h2>Профиль</h2>
                            <h3>Электронная почта</h3>
                            <p id="user-email">iva*****@gmail.com</p>
                            <h3>Текущий адрес</h3>
                            <p id="user-adress">ул.Дерибасовская 14</p>
                            <h3>Дополнительный адрес <span id="additional-adress">(доступно: 0 из 10)</span></h3>
                            <a onClick={this.open} id="add-additional-adress">Добавить адрес</a>
                            < ButtonSettings />
                            <div>
                                <button id="exit-profile" type="submit" className="btn btn-default">Выход</button>
                            </div>
                        </div>

                    </div>
                </div>
                <Modal id="payment-method" className="modal fade" tabindex="-1" role="dialog"
                       show={this.state.showModal} onHide={this.close}>


                        <Modal.Body>
                            <h4 className="modal-title">Оплата дополнительных адресов</h4>
                            <p>Цена 1 дополнительного адреса - 100 грн </p>
                            <h3> Введите количество адресов</h3>
                            <input type="text" className="form-control" id="adress-quantity"/>
                            <h3>Выберите способ оплаты</h3>
                            <div className="choose-language">
                                <label className="radio-inline"><input type="radio" name="optradio"/>Master Card</label>
                                <label className="radio-inline"><input type="radio" name="optradio"/>Visa</label>
                            </div>
                            <h3>Номер карты</h3>
                            <input type="text" className="form-control" id="card-number"/>
                            <h3> Срок действия карты </h3>
                            <div className="container">
                                <div className="row">
                                    <input type="text" id="card-month"/> /
                                    <input type="text" id="card-year"/>
                                </div>
                            </div>
                            <h3> Код CVV </h3>
                            <input type="text" className="form-control" id="cvv-code"/>
                            <h3 id="header-of-quantity-adresses">Выбрано адресов: <span
                                id="quantity-additional-adresses">2</span></h3>
                            <h3>Цена: <span id="adress-price"></span>200грн</h3>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Оплатить</button>
                            </div>

                        </Modal.Body>

                </Modal>
            </section>
        )
    }
}









