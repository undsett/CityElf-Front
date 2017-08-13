import React from 'react';
import Media from 'react-media'

import SliderMain from "./SliderMain";
import AboutUsForSmallScreen from "./AboutUsForSmallScreen";

export default class AboutUs extends React.Component{
    render() {
        return (
            <div>               
                <Media query="screen and (max-width:600px)">
                    {matches => matches ? (
                        <AboutUsForSmallScreen feedBackRequest={this.props.feedBackRequest}/>
                    ) : (
                        <section id="link-about-us">
                            <SliderMain feedBackRequest={this.props.feedBackRequest}/>
                        </section>
                    )}
                </Media>         
            </div>
        )
    }
}

AboutUs.propTypes = {
    feedBackRequest: React.PropTypes.func.isRequired
}








