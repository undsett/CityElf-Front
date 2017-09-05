import React from 'react';
import { connect } from 'react-redux';

import GoogleMapReact from './GoogleMapReact';
import AboutUs from './AboutUs';
import MobileApp from './MobileApp';
import CheckAdress from "./CheckAdress";
import { getAllForecastsRequest, feedBackRequest } from '../../actions/userActions';
import { showSignUpModal } from '../../actions/authActions';
import ScrollUpButton from "./ScrollUpButton";

class MainPage extends React.Component{
    render() {
        return (
            <div className="all-content">
                <div id="map"></div>
                <GoogleMapReact
                    getAllForecastsRequest = {this.props.getAllForecastsRequest} 
                    authorization = {this.props.authorization}
                    showSignUpModal = {this.props.showSignUpModal}
                />
                <AboutUs feedBackRequest={this.props.feedBackRequest} />
                <MobileApp />
                <ScrollUpButton/>
            </div>
        )   
    }
}

MainPage.propTypes = {
    getAllForecastsRequest: React.PropTypes.func.isRequired,
    feedBackRequest: React.PropTypes.func.isRequired,
    authorization: React.PropTypes.object.isRequired,
    showSignUpModal: React.PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {
        authorization: state.authorization
    }
}

export default connect(mapStateToProps, { getAllForecastsRequest, feedBackRequest, showSignUpModal })(MainPage);