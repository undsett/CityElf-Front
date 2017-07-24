import React from 'react';
import { Modal } from 'react-bootstrap';

export default class ImgMapStatic extends React.Component{
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
            <div className="map-block-static">
                <div className="container-search-userpage">
                    <div className="input-group">
                        <input id="pac-input" type="text" className="form-control controls " placeholder="Введите свой адрес или выберите на карте"/>
                            <div className="input-group-btn user-dropdown-adress">
                                <button type="button" id="dropdown-adress" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a href="#">Adress 1</a></li>
                                    <li><a href="#">Adress 2</a></li>
                                    <li><a href="#">Adress 3</a></li>
                                </ul>
                            </div>
                    </div>
                    <div>
                        <div className="check-shut-note">
                            <button onClick={this.open} id="shut-note" type="submit" className="btn btn-default">Сообщить об отключении</button>
                        </div>
                    </div>
                </div>
                <div className="services-chose">
                    <label className="checkbox-inline"><input type="checkbox" value=""/>Газ</label>
                    <label className="checkbox-inline"><input type="checkbox" value=""/>Электричество</label>
                    <label className="checkbox-inline"><input type="checkbox" value=""/>Вода</label>
                </div>
            </div>
                <Modal id="shut-note-for-adress" class="modal fade" tabIndex="-1" role="dialog"show={this.state.showModal} onHide={this.close}>
                    <div className="modal-dialog" role="document">
                            <Modal.Header>
                                <Modal.Title><h4 className="modal-title">Спасибо Вам!</h4></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p className="hanling-request">Ваш запрос принят и обрабатывается. После обработки он появится в списке адресов для
                                    отслеживания отключений</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.close} >OK</button>
                            </Modal.Footer>
                        </div>
                </Modal>
            </div>
        )
    }
}






