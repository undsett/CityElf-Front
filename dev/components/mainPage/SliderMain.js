import  React from 'react';
import Slider from 'react-slick';
import FeedbackForm from "./FeedbackForm";
import  AboutUs from "./AboutUs"


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
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            adaptiveHeight:true,
            touchMove:true,
            autoplaySpeed: 4000,
            arrows:true
        };
        return (
            <Slider id="link-about-us" className="slider-main-page" ref={c => this.slider = c } {...settings}>
                <div className="slider">
                    <article className="post slider1">
                        <div>
                            <div className="absolute-bg1"></div>
                        </div>
                        <div className="post__container">


                            <div className="post__content">
                                <header>
                                    <h1 className="post__header">Что такое СityElf?</h1>
                                </header>

                                <p className="post__text"> <span className="our_name">CityElf </span> заботится о ваших планах: домашних и рабочих.</p>
                                    <p className="post__text">   С ним вы всегда знаете, где, когда и надолго ли лишитесь электричества, воды или газа.</p>
                                    <p className="post__text">   Плановые ремонтные работы или неожиданная авария – <span className="our_name"> CityElf </span> предупредит вас об отключении!</p>
                                    <p className="post__text">   Для этого даже не нужно регистрироваться.</p>
                                    <p className="post__text">   А после регистрации вы получаете ряд преимуществ, включая полезные функции для ОСМД.</p>
                                    <p className="post__text">   Вы можете пользоваться сайтом, а можете установить мобильное приложение.</p>
                            </div>
                            <div className="post__link">

                            </div>
                        </div>

                    </article>

                </div>
                <div className="slider">
                    <article className="post slider2">
                        <div>
                            <div className="absolute-bg2"></div>
                        </div>
                        <div className="post__container">

                            <div className="post__content">
                                <header>
                                    <h1 className="post__header">О нас</h1>
                                </header>

                                <p className="post__text"> <span className="our_name">CityElf </span> – это молодая команда разработчиков. Наша цель – принести пользу Одессе и горожанам.
                                    Мы стараемся сделать вашу жизнь комфортнее, и для этого создали сервис <span className="our_name">CityElf </span> .
                                    Команда регулярно совершенствует веб-сайт и мобильное приложение ради вашего удобства.</p>
                            </div>
                            <div className="post__link">

                            </div>
                        </div>

                    </article></div>
                <div className="slider">
                    <article className="post slider1">
                        <div>
                            <div className="absolute-bg3"></div>
                        </div>
                        <div className="post__container">

                            <div className="post__content">
                                <header>
                                    <h1 className="post__header">Свяжитесь с нами</h1>
                                </header>

                                <p className="post__text">

                                    Хотите оставить отзыв о работе сайта или мобильного приложения?</p>
                                <p className="post__text"> Появились идеи по улучшению работы сервиса и его развитию?</p>
                                <p className="post__text">Есть предложения о сотрудничестве?</p>
                                <p className="post__text"> Пишите нам!</p>
                                <button onClick={this.open} type="submit" className="btn btn-default send-info-about-us" id="writeusbtn">Написать команде</button>

                            </div>
                            <div className="post__link">
                            </div>
                        </div>
                        <FeedbackForm showModal = {this.state.showModal} closeModal = {this.close} feedBackRequest={this.props.feedBackRequest}/>
                    </article>
                </div>
            </Slider>

        );
    }
}
SliderMain.propTypes = {
    feedBackRequest: React.PropTypes.func.isRequired
}
