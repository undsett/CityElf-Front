import React from 'react';
import {Modal} from 'react-bootstrap';

export default class AddAddressButton extends React.Component{
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
                <a onClick={this.open} id="add-additional-adress">Добавить адрес</a>
                <Modal id="payment-method" className="modal fade" tabIndex="-1" role="dialog"
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
            </div>    
        )
    }
}



















