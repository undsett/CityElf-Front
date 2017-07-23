import React from 'react';
import GoogleMapReact from './GoogleMapReact';
import AboutUs from './AboutUs';
import MobileApp from './MobileApp';
import WriteUsModal from "./WriteUsModal";
import CheckAdress from "./CheckAdress";

export default class MainPage extends React.Component{
	render() {
        return (
			<div className="all-content">
				<GoogleMapReact />
				<AboutUs />
				<MobileApp />
				<WriteUsModal/>
				<CheckAdress />
			</div>
        )	
    }
}