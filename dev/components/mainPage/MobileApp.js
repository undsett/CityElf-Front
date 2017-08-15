import React from 'react';

export default class MobileApp extends React.Component{
    render() {
        return (
            <div id="android">
            <section   className="android-app row">
                <div id="container-button-download">
                    <h2>МОБИЛЬНОЕ ПРИЛОЖЕНИЕ</h2>
                    <p>
                        Преимущества мобильного приложения:
                    </p>
                    <ul>
                        <li>Экстренные PUSH-уведомления об отключениях коммунальных услуг по вашему адресу;</li>

                        <li>Возможность срочно сообщить нам и другим пользователям об аварийном отключении
                            услуги;</li>
                        <li> Доступ к информации об отключениях и событиях вашего ОСМД в любое время и в любом
                            месте;</li>
                        <li>Быстрая проверка отключений по любому адресу на карте;</li>
                        <li>  Возможность изменить звук сообщений и временно отключить уведомления.</li>
                    </ul>
                    <a className="download-app" href=""><img src={require("../../assets/img/google-play-badge.png")}/></a>
                </div>
            </section>
            </div>
        )
    }
}
