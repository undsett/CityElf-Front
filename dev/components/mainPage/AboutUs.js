
import React from 'react';
import { Modal } from 'react-bootstrap';
export default class AboutUs extends React.Component{
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
            <section id="link-about-us">
                <div className="cd-slider-wrapper">
                    <ul className="cd-slider">
                        <li className="is-visible">
                            <div className="cd-half-block image"></div>

                            <div className="cd-half-block content">
                                <div>
                                    <h2>О нас</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Repellat fugit ullam voluptatum tenetur ab, non beatae.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="cd-half-block image"></div>

                            <div className="cd-half-block content light-bg">
                                <div>
                                    <h2>CityElf</h2>
                                    <p>
                                        Slide2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugit ullam
                                        voluptatum tenetur ab, non beatae, impedit dolorem itaque voluptates facilis necessitatibus
                                        suscipit dolor rerum dolores dignissimos alias facere sunt aliquid.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="cd-half-block image"></div>

                            <div className="cd-half-block content">
                                <div>
                                    <h2> Свяжитесь с нами </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugit ullam voluptatum
                                        tenetur
                                        ab, non beatae, impedit dolorem itaque voluptates facilis necessitatibus
                                        suscipit dolor rerum dolores dignissimos alias facere sunt aliquid.
                                    </p>
                                    <button onClick={this.open} type="submit" className="btn btn-default send-info-about-us" id="writeusbtn">Написать нам</button>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>

                <Modal id="modal-write-us"  className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog"
                       aria-labelledby="myLargeModalLabel" aria-hidden="true" show={this.state.showModal} onHide={this.close}>
                    <Modal.Body>
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
                    </Modal.Body>
                </Modal>
            </section>
        )
    }
}







