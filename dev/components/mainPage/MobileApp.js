import React from 'react';

export default class MobileApp extends React.Component{
    render() {
        return (
            <section id="android" className="android-app row">
                <div id="moquaps-phone" className="col-lg-6 col-md-8 col-xs-12">
                    <img  src={require("../../assets/img/Groupphone.png")}/>
                </div>
                <div id="container-button-download" className="col-lg-6 col-md-4 col-xs-12">
                    <h2>CityElf</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicin.
                        Lorem ipsum dolor sit amet, consectetur adipisicin
                    </p>
                    <a className="download-app" href="#"><img src= {require("../../assets/img/google-play-badge.png")}/>
                       </a>
                </div>
            </section>
        )
    }
}
