import React from 'react';
import GoogleMap from './GoogleMap';
import AboutUs from './AboutUs';
import MobileApp from './MobileApp';
import ModalLoginForm from "./ModalLoginForm";
import WriteUsModal from "./WriteUsModal";
import CheckAdress from "./CheckAdress";

export default class MainPage extends React.Component{
	render() {
        return (
			<div>
				<GoogleMap />
				<AboutUs />
				<MobileApp />
				<ModalLoginForm />
				<WriteUsModal/>
				<CheckAdress />
			</div>
        )	
    }
}