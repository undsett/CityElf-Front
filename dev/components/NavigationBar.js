import React from 'react';
import { Link } from 'react-router';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import SignInFormGroup from './mainPage/SignInFormGroup';
import RegistrationFormGroup from './mainPage/RegistrationFormGroup';
import { userSignupRequest, checkLoginPasswordRequest, setCurrentUser, showSignUpModal, hideSignUpModal } from '../actions/authActions';
import { showEnterAddressModal } from '../actions/userActions';
import ScrollUpButton from "./mainPage/ScrollUpButton";

class NavigationBar extends React.Component{
        render() {
            const { isAuthenticated, isShownSignUpModal } = this.props.authorization;
            const userLinks = (
            <div>

                <LinkContainer to="/map" id="profile-link">
                    <NavItem>Главная</NavItem>
                </LinkContainer>
                <LinkContainer to="/profile">
                    <NavItem>Профиль</NavItem>
                </LinkContainer>
            </div>
            );
            const guestLinks = (
                <Nav>

                    <li>
                        <Navbar.Link href="#map" id="profile-link">Главная</Navbar.Link>
                    </li>
                    <li>
                        <Navbar.Link href="#link-about-us">О нас</Navbar.Link>
                    </li>
                    <li>
                        <Navbar.Link href="#android">Мобильный доступ</Navbar.Link>
                    </li>
                    <li>
                        <Navbar.Link onClick={this.props.showSignUpModal} id="modalpopuplogin">Вход</Navbar.Link>
                    </li>

                </Nav>
            );
            return (
                <div>

                    <Navbar fixedTop={true} inverse collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#map">CityElf</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>

                        <Navbar.Collapse>
                                { isAuthenticated ? userLinks : guestLinks }

                        </Navbar.Collapse>
                    </Navbar>

                    <Modal id="modal-login-form"  bsSize="large" className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog"
                    aria-labelledby="myLargeModalLabel" aria-hidden="true" show={isShownSignUpModal} onHide={this.props.hideSignUpModal}>
                        <Modal.Body>
                            <Modal.Header closeButton></Modal.Header>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-5 col-sm-5 img-form-login">
                                        <h1>CityElf</h1>
                                    </div>
                                    <div className="col-md-3 col-sm-3 container-login-form">
                                        <RegistrationFormGroup
                                            userSignupRequest = {this.props.userSignupRequest}
                                            setCurrentUser = {this.props.setCurrentUser}
                                            closeModal = {this.props.hideSignUpModal}
                                            showEnterAddressModal = {this.props.showEnterAddressModal}
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
        hideSignUpModal: React.PropTypes.func.isRequired,
        showEnterAddressModal: React.PropTypes.func.isRequired
    };

    function mapStateToProps(state) {
        return {
            authorization: state.authorization
        }
    }

    export default connect(
        mapStateToProps,
        { userSignupRequest, checkLoginPasswordRequest, setCurrentUser, showSignUpModal, hideSignUpModal, showEnterAddressModal }
    )(NavigationBar);
