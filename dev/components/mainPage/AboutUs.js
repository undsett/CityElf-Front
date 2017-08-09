import React from 'react';
import FeedbackForm from "./FeedbackForm";
import SliderMain from "./SliderMain";
import AboutUsForSmallScreen from "./AboutUsForSmallScreen";

export default class AboutUs extends React.Component{
    render() {
        return (
            <div>
            <section id="link-about-us">
                <SliderMain feedBackRequest={this.props.feedBackRequest}/>
            </section>
                <AboutUsForSmallScreen feedBackRequest={this.props.feedBackRequest}/>
            </div>
        )
    }
}

AboutUs.propTypes = {
    feedBackRequest: React.PropTypes.func.isRequired
}








