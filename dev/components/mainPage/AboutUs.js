
import React from 'react';
import { Modal } from 'react-bootstrap';
import $ from 'jquery';
import SendUsLetter from "./SendUsLetter";
export default class AboutUs extends React.Component{
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
                                    <button onClick={this.open} type="submit" className="btn btn-default send-info-about-us" id="writeusbtn">Написать нам</button>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>

                <Modal id="modal-write-us"  className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog"
                       aria-labelledby="myLargeModalLabel" aria-hidden="true" show={this.state.showModal} onHide={this.close}>
                    <Modal.Body>
                        <h2>Обратная связь</h2>
                        <div className="form-group modal-contact">
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder=" Ваше имя"/></div>

                                <div className="col-md-6"><input type="email" className="form-control"
                                                                 placeholder="Email"/>
                                </div>
                            </div>
                            <input type="text" className="form-control" placeholder="Тема сообщения"/>
                            <textarea className="form-control" id="exampleTextarea" rows="3"
                                      placeholder="Текст сообщения"/>
                           <SendUsLetter closeModal={this.close} />
                        </div>
                    </Modal.Body>
                </Modal>
            </section>
        )
    }
}







