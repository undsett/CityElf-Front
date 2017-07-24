import React from 'react';

export default class WriteUsModal extends React.Component {
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
            <div className="modal fade" tabIndex="-1" role="dialog" id="writeusmodal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h2>Обратная связь</h2>
                            <div className="form-group modal-contact">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder=" Ваше имя"/></div>

                                    <div className="col-md-6"><input type="email" className="form-control"
                                                                     placeholder="Email"/>
                                    </div>
                                </div>
                                <input type="text" className="form-control" placeholder="Текст сообщения"/>
                                <textarea className="form-control" id="exampleTextarea" rows="3"
                                          placeholder="Текст сообщения"/>
                                <button type="submit" className="btn btn-default form-btn-contactus">Отправить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}






































