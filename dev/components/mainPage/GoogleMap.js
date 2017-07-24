import React from 'react';

export default class GoogleMap extends React.Component{
    render() {
        return (
            <section className="container-for-map">
                <div id="map-canvas">
                </div>
                <div className="container-search-main">
                    <input id="pac-input" type="text" className="form-control controls"
                           placeholder="Введите свой адрес или выберите на карте"/>
                        <button id="check-adress" type="submit" className="btn btn-default">Проверить</button>
                </div>
            </section>
        )
    }
}







