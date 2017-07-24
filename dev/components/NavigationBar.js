import React from 'react';
import { Link } from 'react-router';
import { Modal } from 'react-bootstrap';

import SignInFormGroup from './mainPage/SignInFormGroup';
import RegistrationFormGroup from './mainPage/RegistrationFormGroup';

export default class NavigationBar extends React.Component{
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
                <nav id="top-menu-main">  
                    <div className="navbar navbar-fixed-top navbar-inverse" role="navigation">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#b-menu-1">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <Link to="/" className="navbar-brand">CityElf</Link>
                            </div>
                            <div className="collapse navbar-collapse" id="b-menu-1">
                                <ul className="nav navbar-nav navbar-left">
                                    <li><Link to="/" id="profile-link">Главная</Link></li>
                                    <li><a href="#link-about-us">О нас</a></li>
                                    <li><a href="#android">Мобильный доступ</a></li>
                                    <li onClick={this.open}><a href="#" id="modalpopuplogin">Вход</a></li>
                                    <li><Link to="/profile">Профиль</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                <Modal id="modal-login-form"  bsSize="large" className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog"
                aria-labelledby="myLargeModalLabel" aria-hidden="true" show={this.state.showModal} onHide={this.close}>                   
                    <Modal.Body>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-5 col-sm-5 img-form-login">
                                    <h1>CityElf</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, at atque blanditiis
                                        consequuntur distinctio dolorem doloremque error eum excepturi iste laudantium minima
                                        odio omnis
                                        praesentium quasi repellendus rerum similique voluptatum!Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit. Asperiores, at atque blanditiis consequuntur distinctio
                                        dolorem doloremque error eum excepturi iste laudantium minima odio omnis
                                        praesentium quasi repellendus rerum similique voluptatum!</p>
                                </div>
                                <div className="col-md-3 col-sm-3 container-login-form">
                                    <RegistrationFormGroup userSignupRequest = {this.props.userSignupRequest} />
                                </div>
                                <div className="col-md-3 col-sm-3 container-for-register-user">
                                    <SignInFormGroup/>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>                 
                </Modal>
            </div>
        )
    }
} 

NavigationBar.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}