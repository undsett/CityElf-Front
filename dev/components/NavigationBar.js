import React from 'react';
import { Link } from 'react-router';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';

import SignInFormGroup from './mainPage/SignInFormGroup';
import RegistrationFormGroup from './mainPage/RegistrationFormGroup';
import { userSignupRequest, checkLoginPasswordRequest, setCurrentUser, showSignUpModal, hideSignUpModal } from '../actions/authActions';

class NavigationBar extends React.Component{
    // constructor() {
    //     super();
        
    //     this.state = {
    //         showModal: false
    //     }
    //     this.open = this.open.bind(this);
    //     this.close = this.close.bind(this);
    // }

    // close() {
    //     this.setState({ showModal: false });
    // }

    // open() {
    //     this.setState({ showModal: true });
    // }

    render() {
        const { isAuthenticated, isShownSignUpModal } = this.props.authorization;
        const userLinks = (
            <ul className="nav navbar-nav navbar-left">
                <li><Link to="/" id="profile-link">Главная</Link></li>
                <li><Link to="/profile">Профиль</Link></li>
            </ul>
        );
        const guestLinks = (
            <ul className="nav navbar-nav navbar-left">
                <li><Link to="/" id="profile-link">Главная</Link></li>
                <li><a href="#link-about-us">О нас</a></li>
                <li><a href="#android">Мобильный доступ</a></li>
                <li onClick={this.props.showSignUpModal}><a href="#" id="modalpopuplogin">Вход</a></li>
            </ul>
        );
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
                                { isAuthenticated ? userLinks : guestLinks }
                            </div>
                        </div>
                    </div>
                </nav>

                <Modal id="modal-login-form"  bsSize="large" className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog"
                aria-labelledby="myLargeModalLabel" aria-hidden="true" show={isShownSignUpModal} onHide={this.props.hideSignUpModal}>                   
                    <Modal.Body>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-5 col-sm-5 img-form-login">
                                    <h1>CityElf</h1>
                                    <p className="post__text"> <span className="our_name">CityElf </span> заботится о ваших планах: домашних и рабочих.
                                        С ним вы всегда знаете, где, когда и надолго ли лишитесь электричества, воды или газа.
                                        Плановые ремонтные работы или неожиданная авария – <span className="our_name"> CityElf </span> предупредит вас об отключении!
                                        Для этого даже не нужно регистрироваться.
                                        А после регистрации вы получаете ряд преимуществ, включая полезные функции для ОСМД.
                                        Вы можете пользоваться сайтом, а можете установить мобильное приложение.</p>
                                </div>
                                <div className="col-md-3 col-sm-3 container-login-form">
                                    <RegistrationFormGroup 
                                        userSignupRequest = {this.props.userSignupRequest}
                                        setCurrentUser = {this.props.setCurrentUser} 
                                        closeModal = {this.props.hideSignUpModal} 
                                    />
                                </div>
                                <div className="col-md-3 col-sm-3 container-for-register-user">
                                    <SignInFormGroup 
                                        checkLoginPasswordRequest = {this.props.checkLoginPasswordRequest} 
                                        setCurrentUser = {this.props.setCurrentUser} 
                                        closeModal = {this.props.hideSignUpModal}
                                    />
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
    userSignupRequest: React.PropTypes.func.isRequired,
    checkLoginPasswordRequest: React.PropTypes.func.isRequired,
    setCurrentUser: React.PropTypes.func.isRequired,
    authorization: React.PropTypes.object.isRequired,
    showSignUpModal: React.PropTypes.func.isRequired,
    hideSignUpModal: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        authorization: state.authorization
    }
}

export default connect(
    mapStateToProps, 
    { userSignupRequest, checkLoginPasswordRequest, setCurrentUser, showSignUpModal, hideSignUpModal }
    )(NavigationBar);