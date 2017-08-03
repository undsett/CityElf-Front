import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../actions/authActions';

class LogoutButton extends React.Component {
    constructor() {
        super();
        
        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.logout();
        this.context.router.push('/');
    }

    render() {
        return (
            <button 
                id="exit-profile" 
                type="submit" 
                className="btn btn-default"
                onClick={this.logout}
            >Выход</button>
        )
    }
}

LogoutButton.propTypes = {
    logout: React.PropTypes.func.isRequired
}

LogoutButton.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default connect( null, {logout} )(LogoutButton);


