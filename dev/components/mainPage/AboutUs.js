import React from 'react';
import FeedbackForm from "./FeedbackForm";
import SliderMain from "./SliderMain";

export default class AboutUs extends React.Component{
    render() {
        return (
            <section id="link-about-us">
                <SliderMain feedBackRequest={this.props.feedBackRequest}/>
            </section>
        )
    }
}

AboutUs.propTypes = {
    feedBackRequest: React.PropTypes.func.isRequired
}








