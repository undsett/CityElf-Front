import React from 'react';

export default class MobileApp extends React.Component{
    render() {
        return (
            <section id="android" className="android-app row">
                <div id="moquaps-phone" className="col-lg-5 col-md-8 col-xs-12">
                    <img  src={require("../../assets/img/Groupphone.png")}/>
                </div>
                <div id="container-button-download" className="col-lg-7 col-md-4 col-xs-12">
                    <h2>Преимущества мобильного приложения:</h2>
                    <ul>
                        <li>экстренные PUSH-уведомления об отключениях коммунальных услуг по вашему адресу;</li>
                        <li>возможность срочно сообщить нам и другим пользователям об аварийном отключении
                            услуги;</li>
                        <li>доступ к информации об отключениях и событиях вашего ОСМД в любое время и в любом
                            месте;</li>
                        <li>быстрая проверка отключений по любому адресу на карте;</li>
                        <li>возможность изменить звук сообщений и временно отключить уведомления.</li>
                    </ul>
                    <a className="download-app" href="#"><img src= {require("../../assets/img/google-play-badge.png")}/>
                       </a>
                </div>
            </section>
        )
    }
}
