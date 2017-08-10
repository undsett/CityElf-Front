import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';

import { hideEnterAddressModal } from '../../actions/userActions';

class EnterAddressModal extends React.Component {
    render() {
        const { isShownEnterAddressModal } = this.props.userReducer;
        return (
            <Modal id="shut-note-for-adress" className="modal fade" tabIndex="-1" role="dialog" show={isShownEnterAddressModal} onHide={this.props.hideEnterAddressModal}>
                <div className="modal-dialog" role="document">
                    <Modal.Header>
                        <Modal.Title>Спасибо за регистрацию.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className="hanling-request">Введите адрес в настройках</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.props.hideEnterAddressModal}>OK</button>
                    </Modal.Footer>
                </div>
            </Modal>
        )
    }
}

EnterAddressModal.propTypes = {
    userReducer: React.PropTypes.object.isRequired,
    hideEnterAddressModal: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        userReducer: state.userReducer
    }
}

export default connect(mapStateToProps, { hideEnterAddressModal })(EnterAddressModal);