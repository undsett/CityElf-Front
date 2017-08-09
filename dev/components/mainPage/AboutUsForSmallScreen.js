import React from 'react';
import FeedbackForm from './FeedbackForm';
export default class AboutUsForSmallScreen extends React.Component{
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
    render() {
        return (
            <section  className="about-us-smallscreen">

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

                <div className="post__content">
                    <header>
                        <h2 className="post__header">О нас</h2>
                    </header>

                    <p className="post__text"> <span className="our_name">CityElf </span> – это молодая команда разработчиков. Наша цель – принести пользу Одессе и горожанам.
                        Мы стараемся сделать вашу жизнь комфортнее, и для этого создали сервис <span className="our_name">CityElf </span> .
                        Команда регулярно совершенствует веб-сайт и мобильное приложение ради вашего удобства.</p>
                </div>
                <div className="post__content">
                    <header>
                        <h2 className="post__header">Свяжитесь с нами</h2>
                    </header>
                    <ul>
                        <li className="post__text_list">Хотите оставить отзыв о работе сайта или мобильного приложения?</li>
                        <li className="post__text_list">Появились идеи по улучшению работы сервиса и его развитию?</li>
                        <li className="post__text_list">Есть предложения о сотрудничестве?</li>
                    </ul>
                    <p className="post__offer">Пишите нам!</p>
                    <button onClick={this.open} type="submit" className="btn send-info-about-us" id="writeusbtn">Написать команде</button>

                </div>
                <FeedbackForm showModal = {this.state.showModal} closeModal = {this.close} feedBackRequest={this.props.feedBackRequest}/>

            </section>
        )
    }
}
AboutUsForSmallScreen.propTypes = {
    feedBackRequest: React.PropTypes.func.isRequired
}
