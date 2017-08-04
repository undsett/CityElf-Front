import React from 'react';
import $ from 'jquery';
import FeedbackForm from "./FeedbackForm";

export default class AboutUs extends React.Component{
    constructor() {
        super();

        this.state = {
            showModal: false
        }
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    componentDidMount() {

        var sliderContainer = $('.cd-slider-wrapper')
        var sliderPagination = createSliderPagination(sliderContainer);

        function createSliderPagination(container){
            var wrapper = $('<ol class="cd-slider-navigation"></ol>');
            container.children('.cd-slider').find('li').each(function(index){
                var dotWrapper = (index == 0) ? $('<li class="selected"></li>') : $('<li></li>'),
                    dot = $('<a href="#0"></a>').appendTo(dotWrapper);
                dotWrapper.appendTo(wrapper);
                var dotText = ( index+1 < 10 ) ? '0'+ (index+1) : index+1;
                dot.text(dotText);
            });
            wrapper.appendTo(container);
            return wrapper.children('li');
        }
        jQuery(document).ready(function($){
            var sliderContainers = $('.cd-slider-wrapper');

            if( sliderContainers.length > 0 ) initBlockSlider(sliderContainers);

            function initBlockSlider(sliderContainers) {
                sliderContainers.each(function(){
                    var sliderContainer = $(this),
                        slides = sliderContainer.children('.cd-slider').children('li'),
                        sliderPagination = createSliderPagination(sliderContainer);

                    sliderPagination.on('click', function(event){
                        event.preventDefault();
                        var selected = $(this),
                            index = selected.index();
                        updateSlider(index, sliderPagination, slides);
                    });

                    sliderContainer.on('swipeleft', function(){
                        var bool = enableSwipe(sliderContainer),
                            visibleSlide = sliderContainer.find('.is-visible').last(),
                            visibleSlideIndex = visibleSlide.index();
                        if(!visibleSlide.is(':last-child') && bool) {updateSlider(visibleSlideIndex + 1, sliderPagination, slides);}
                    });

                    sliderContainer.on('swiperight', function(){
                        var bool = enableSwipe(sliderContainer),
                            visibleSlide = sliderContainer.find('.is-visible').last(),
                            visibleSlideIndex = visibleSlide.index();
                        if(!visibleSlide.is(':first-child') && bool) {updateSlider(visibleSlideIndex - 1, sliderPagination, slides);}
                    });
                });
            }

            function createSliderPagination(container){
                var wrapper = $('<ol class="cd-slider-navigation"></ol>');
                container.children('.cd-slider').find('li').each(function(index){
                    var dotWrapper = (index == 0) ? $('<li class="selected"></li>') : $('<li></li>'),
                        dot = $('<a href="#0"></a>').appendTo(dotWrapper);
                    dotWrapper.appendTo(wrapper);
                    var dotText = ( index+1 < 10 ) ? '0'+ (index+1) : index+1;
                    dot.text(dotText);
                });
                wrapper.appendTo(container);
                return wrapper.children('li');
            }

            function updateSlider(n, navigation, slides) {
                navigation.removeClass('selected').eq(n).addClass('selected');
                slides.eq(n).addClass('is-visible').removeClass('covered').prevAll('li').addClass('is-visible covered').end().nextAll('li').removeClass('is-visible covered');

                //fixes a bug on Firefox with ul.cd-slider-navigation z-index
                navigation.parent('ul').addClass('slider-animating').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                    $(this).removeClass('slider-animating');
                });
            }

            function enableSwipe(container) {
                return ( container.parents('.touch').length > 0 );
            }
        });
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
                <div className="cd-slider-wrapper">
                    <ul className="cd-slider">
                        <li className="is-visible">
                            <div className="cd-half-block image"></div>

                            <div className="cd-half-block content">
                                <div>
                                    <h2>Что такое CityElf</h2>
                                    <p>
                                        CityElf заботится о ваших планах: домашних и рабочих.
                                        С ним вы всегда знаете, где, когда и надолго ли лишитесь электричества, воды или газа.
                                        Плановые ремонтные работы или неожиданная авария – CityElf предупредит вас об отключении!
                                        Для этого даже не нужно регистрироваться.
                                        А после регистрации вы получаете ряд преимуществ, включая полезные функции для ОСМД.
                                        Вы можете пользоваться сайтом, а можете установить мобильное приложение.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="cd-half-block image"></div>

                            <div className="cd-half-block content light-bg">
                                <div>
                                    <h2>О нас</h2>
                                    <p>
                                        CityElf – это молодая команда разработчиков. Наша цель – принести пользу Одессе и горожанам.
                                        Мы стараемся сделать вашу жизнь комфортнее, и для этого создали сервис CityElf.
                                        Команда регулярно совершенствует веб-сайт и мобильное приложение ради вашего удобства.                                    </p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="cd-half-block image"></div>

                            <div className="cd-half-block content">
                                <div>
                                    <h2> Свяжитесь с нами </h2>
                                    <p>
                                        Хотите оставить отзыв о работе сайта или мобильного приложения?
                                        Появились идеи по улучшению работы сервиса и его развитию?
                                        Есть предложения о сотрудничестве?
                                        Пишите нам!
                                    </p>
                                    <button onClick={this.open} type="submit" className="btn btn-default send-info-about-us" id="writeusbtn">Написать команде</button>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
                <FeedbackForm showModal = {this.state.showModal} closeModal = {this.close} feedBackRequest={this.props.feedBackRequest}/>
            </section>
        )
    }
}

AboutUs.propTypes = {
    feedBackRequest: React.PropTypes.func.isRequired
}







