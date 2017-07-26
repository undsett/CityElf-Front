import React from 'react';
import { connect } from 'react-redux';

import GoogleMapReact from './GoogleMapReact';
import AboutUs from './AboutUs';
import MobileApp from './MobileApp';
import WriteUsModal from "./WriteUsModal";
import CheckAdress from "./CheckAdress";
import { getAllForecastsRequest } from "../../actions/userActions";

class MainPage extends React.Component{
	render() {
        return (
			<div className="all-content">
				<GoogleMapReact getAllForecastsRequest={this.props.getAllForecastsRequest} />
				<AboutUs />
				<MobileApp />
				<WriteUsModal/>
			</div>
        )	
    }
}

MainPage.propTypes = {
    getAllForecastsRequest: React.PropTypes.func.isRequired
}

export default connect(null, { getAllForecastsRequest })(MainPage);