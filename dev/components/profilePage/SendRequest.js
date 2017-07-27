import React from 'react';
import {Modal} from 'react-bootstrap';

export default class SendRequest extends React.Component {
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
        this.props.closeModal();
    }

    open() {
        this.setState({showModal: true});
    }

    render() {
        return (
            <div>
                <button onClick={this.open} type="button" className="btn btn-default" data-dismiss="modal">Отправить запрос</button>
                <Modal id="request-in-progress" class="modal fade" tabIndex="-1" role="dialog"show={this.state.showModal} onHide={this.close}>
                    <div className="modal-dialog" role="document">
                        <Modal.Header>
                            <Modal.Title><h4 className="modal-title">Спасибо Вам!</h4></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p className="hanling-request">Ваш запрос отправлен. Мы рассмотрим его в течение 3 рабочих дней, о результате сообщим по электронной почте
                            </p>
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