import React from 'react';
import { connect } from 'react-redux';

import GoogleMapReact from './GoogleMapReact';
import AboutUs from './AboutUs';
import MobileApp from './MobileApp';
import CheckAdress from "./CheckAdress";
import { getAllForecastsRequest } from "../../actions/userActions";
import { feedBackRequest } from '../../actions/userActions';

class MainPage extends React.Component{
	render() {
        return (
			<div className="all-content">
				<GoogleMapReact getAllForecastsRequest={this.props.getAllForecastsRequest} />
				<AboutUs feedBackRequest={this.props.feedBackRequest} />
				<MobileApp />
			</div>
        )	
    }
}

MainPage.propTypes = {
    getAllForecastsRequest: React.PropTypes.func.isRequired,
    feedBackRequest: React.PropTypes.func.isRequired
}

export default connect(null, { getAllForecastsRequest, feedBackRequest })(MainPage);