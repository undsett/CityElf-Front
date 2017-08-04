
import React from 'react';
import {Modal} from 'react-bootstrap';

export default class SendUsLetterButton extends React.Component {
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
        const thanksBlock = (
            <div className="modal-dialog" role="document">
                <Modal.Header>
                    <Modal.Title className="modal-title"> Спасибо Вам!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="hanling-request">Ваше письмо отправлено. Мы пришлем ответ на ваш email</p>                            
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.close}>OK</button>
                </Modal.Footer>
            </div>
        );
        const errorBlock = (
            <div className="modal-dialog" role="document">
                <Modal.Body>
                    <p className="hanling-request">Ошибка сервера</p>                            
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.close}>OK</button>
                </Modal.Footer>
            </div>
        );
        return (
            <div>
                <button 
                    onClick={this.open} 
                    type="submit" 
                    className="btn btn-default form-btn-contactus"
                    disabled={!this.props.formValid}
                >Отправить</button>
                <Modal id="write-us-letter" className="modal fade" tabIndex="-1" role="dialog"show={this.state.showModal} onHide={this.close}>
                    {this.props.serverResponseError ? errorBlock : thanksBlock}
                </Modal>
            </div>
        )
    }
}












