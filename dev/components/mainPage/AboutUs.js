
import React from 'react';

export default class AboutUs extends React.Component{
    render() {
        return (
            <section id="link-about-us">
                <div className="cd-slider-wrapper">
                    <ul className="cd-slider">
                        <li className="is-visible">
                            <div className="cd-half-block image"></div>

                            <div className="cd-half-block content">
                                <div>
                                    <h2>О нас</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Repellat fugit ullam voluptatum tenetur ab, non beatae.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="cd-half-block image"></div>

                            <div className="cd-half-block content light-bg">
                                <div>
                                    <h2>CityElf</h2>
                                    <p>
                                        Slide2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugit ullam
                                        voluptatum tenetur ab, non beatae, impedit dolorem itaque voluptates facilis necessitatibus
                                        suscipit dolor rerum dolores dignissimos alias facere sunt aliquid.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="cd-half-block image"></div>

                            <div className="cd-half-block content">
                                <div>
                                    <h2> Свяжитесь с нами </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugit ullam voluptatum
                                        tenetur
                                        ab, non beatae, impedit dolorem itaque voluptates facilis necessitatibus
                                        suscipit dolor rerum dolores dignissimos alias facere sunt aliquid.
                                    </p>
                                    <button type="submit" className="btn btn-default" id="writeusbtn">Написать нам</button>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </section>
        )
    }
}







