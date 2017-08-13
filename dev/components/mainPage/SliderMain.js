import React from 'react';
import Slider from 'react-slick';

import FeedbackForm from "./FeedbackForm";
import AboutUs from "./AboutUs"


export default class SliderMain extends React.Component {
    constructor() {
        super();

        this.state = {
            showModal: false
        };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }
    close() {
        this.setState({ showModal: false });
    }
    open() {
        this.setState({ showModal: true });
    }
    render () {
        console.log("slider");
        let settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            touchMove:true,
            speed:2000,
            cssEase: 'ease-in',
        };
        return (
            <Slider id="link-about-us" className="slider-main-page" ref={c => this.slider = c } {...settings}>
                <div className="slider slider1">
                    <article className="post slider1">
                        <div className="container-img-slider">
                           <img className="slider-img" src={require("../../assets/img/WhatisCityElf.png")}/>
                        </div>
                            <div className="post__content slide-about-us">
                                    <h1 className="post__header">Что такое СityElf?</h1>
                                    <p className="post__text slide1"> <span className="our_name">CityElf </span> заботится о ваших планах: домашних и рабочих.</p>
                                    <p className="post__text slide1">   С ним вы всегда знаете, где, когда и надолго ли лишитесь электричества, воды или газа.</p>
                                    <p className="post__text slide1">   Плановые ремонтные работы или неожиданная авария – <span className="our_name"> CityElf </span> предупредит вас об отключении!</p>
                                    <p className="post__text slide1">   Для этого даже не нужно регистрироваться.</p>
                                    <p className="post__text slide1">   А после регистрации вы получаете ряд преимуществ, включая полезные функции для ОСМД.</p>
                                    <p className="post__text ">   Вы можете пользоваться сайтом, а можете установить мобильное приложение.</p>
                            </div>
                    </article>
                </div>
                <div className="slider our-team">
                    <article className="post slider2">
                        <div className="container-img-slider">
                            <img className="slider-img team-img" src={require("../../assets/img/team.png")}/>
                        </div>
                            <div className="post__content">
                                <h2 className="post__header">О нас</h2>
                                <p className="post__text"> <span className="our_name">CityElf </span> – это молодая команда разработчиков. Наша цель – принести пользу Одессе и горожанам.
                                    Мы стараемся сделать вашу жизнь комфортнее, и для этого создали сервис <span className="our_name">CityElf </span> .
                                    Команда регулярно совершенствует веб-сайт и мобильное приложение ради вашего удобства.</p>
                            </div>
                    </article>
                </div>
                <div className="slider">
                    <article className="post slider1">
                        <div className="container-img-slider">
                            <img className="slider-img" src={require("../../assets/img/social-network-people.png")}/>
                        </div>
                            <div className="post__content">
                                    <h2 className="post__header">Свяжитесь с нами</h2>
                                <ul className="feedback__text">
                                    <li className="post__text_list">Хотите оставить отзыв о работе сайта или мобильного приложения?</li>
                                    <li className="post__text_list">Появились идеи по улучшению работы сервиса и его развитию?</li>
                                    <li className="post__text_list">Есть предложения о сотрудничестве?</li>
                                </ul>
                                <p className="post__text contact-us">Пишите нам!</p>
                                <button onClick={this.open} type="submit" className="btn send-info-about-us" id="writeusbtn">Написать команде</button>
                            </div>
                    </article>
                    <FeedbackForm showModal = {this.state.showModal} closeModal = {this.close} feedBackRequest={this.props.feedBackRequest}/>
                </div>
            </Slider>

        );
    }
}
SliderMain.propTypes = {
    feedBackRequest: React.PropTypes.func.isRequired
}
