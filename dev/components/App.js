import React from 'react';
import { connect } from 'react-redux';

import NavigationBar from './NavigationBar';
import Footer from './Footer';
import { userSignupRequest } from '../actions/userActions';

class App extends React.Component {    
    constructor() {
        super(); 

    }

    render() { 
        return (
        	<div>
        		<NavigationBar userSignupRequest = {this.props.userSignupRequest} />
        		{this.props.children}
        		<Footer/>
        	</div>
        )  
    }
}

App.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}

// const mapStateToProps = (state) => {
//     return {
//         state
//     }
// };
// const mapDispatchToProps = (dispatch) => {
//     return {
        
//     }
// };

export default connect(null, { userSignupRequest })(App);

