import React from 'react';
import ScrollToTop from 'react-scroll-up';

export default class ScrollUpButton extends React.Component {
    render() {
        return (
            <ScrollToTop showUnder={160}>
                <img  className="arrow-scroll-up" src={require("../../assets/img/up-arrow (5).png")} alt="Arrow-up"/>
            </ScrollToTop>
        );
    }
}