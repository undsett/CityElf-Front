import React from 'react';
import $ from 'jquery';
import FeedbackForm from "./FeedbackForm";
import SliderMain from "./SliderMain";

export default class AboutUs extends React.Component{
    constructor() {
        super();

        this.state = {
            showModal: false
        }
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }
    close() {
        this.setState({ showModal: false });
    }
    open() {
        this.setState({ showModal: true });
    }

    render() {
        return (
            <section id="link-about-us">
                <SliderMain/>
            </section>
        )
    }
}








