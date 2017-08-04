import React from 'react';

export default class LoginRegisterButton extends React.Component {
    constructor() {
        super();
        this.closeForecastModal = this.closeForecastModal.bind(this);
    }
    closeForecastModal(){
        this.props.closeModal();
        this.props.showSignUpModal();
    }
    render() {
        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                <button                      
                    className = "login-modal btn btn-default form-btn-checkadress"
                    onClick = {this.closeForecastModal}
                >Вход / Регистрация</button>
            </div>
        )
    }
}

LoginRegisterButton.propTypes = {
    showSignUpModal: React.PropTypes.func.isRequired,
}