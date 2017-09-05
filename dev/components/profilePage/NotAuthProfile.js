import React from 'react';
import { connect } from 'react-redux';

import { showSignUpModal } from '../../actions/authActions';

class NotAuthProfile extends React.Component {
    componentWillMount() {
        this.context.router.push('/');
        this.props.showSignUpModal();
    }
    render() {
        return <div className="mydiv"></div>
    }
}

NotAuthProfile.contextTypes = {
    router: React.PropTypes.object.isRequired
}

NotAuthProfile.propTypes = {
    showSignUpModal: React.PropTypes.func.isRequired
}

export default connect(null, {showSignUpModal})(NotAuthProfile);