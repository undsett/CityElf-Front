import React from 'react';
import {Modal} from 'react-bootstrap';

import Request from 'superagent';

export default class CheckAdress extends React.Component{
    constructor() {
        super();

        this.state = {
            showModal: false,
            address: '',
            electricity: {},
            water: '',
            gas: '',
            responseError: '',
            isLoading: false
        }
        this.getForecastsInModal = this.getForecastsInModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        this.setState({ showModal: false });
    }

    getForecastsInModal() {
        this.setState({
            address: '',
            electricity: {},
            water: '',
            gas: '',
            responseError: '',
            isLoading: true
        })        
        this.props.getAllForecastsRequest(this.props.address).then(
            (response) => {
                let forecast = JSON.parse(response.text);
                console.log(forecast);
                if (Object.keys(forecast).length == 0) {
                    this.setState({
                        showModal: true,
                        responseError: "Уведомления не найдены"
                    })
                } 
                if ("Electricity" in forecast) {
                    let electricity = forecast.Electricity
                    let start = new Date();
                    start.setTime(Date.parse(electricity.start));
                    let estimatedStop = new Date();
                    estimatedStop.setTime(Date.parse(electricity.estimatedStop));
                    electricity = {
                        ...electricity,
                        start: start.toLocaleString(),
                        estimatedStop: estimatedStop.toLocaleString()
                    };
                    this.setState({ 
                        showModal: true,
                        address: electricity.address.address,
                        electricity: electricity,
                    });
                }
                if ("Water" in forecast) {
                    let water = forecast.Water
                    let start = new Date();
                    start.setTime(Date.parse(water.start));
                    let estimatedStop = new Date();
                    estimatedStop.setTime(Date.parse(water.estimatedStop));
                    water = {
                        ...water,
                        start: start.toLocaleString(),
                        estimatedStop: estimatedStop.toLocaleString()
                    };
                    this.setState({ 
                        showModal: true,
                        address: water.address.address,
                        water: water,
                    });
                }
                if ("Gas" in forecast) {
                    let gas = forecast.Gas
                    let start = new Date();
                    start.setTime(Date.parse(gas.start));
                    let estimatedStop = new Date();
                    estimatedStop.setTime(Date.parse(gas.estimatedStop));
                    gas = {
                        ...gas,
                        start: start.toLocaleString(),
                        estimatedStop: estimatedStop.toLocaleString()
                    };
                    this.setState({ 
                        showModal: true,
                        address: gas.address.address,
                        gas: gas,
                    });
                }
                this.setState({
                    isLoading: false
                })           
            },   
            (error) => {
                if (error.status == 400) {
                   this.setState({
                        showModal: true,
                        responseError: "Уведомления не найдены",
                        isLoading: false
                    }) 
                } else {
                    this.setState({
                        showModal: true,
                        responseError: "Ошибка сервера",
                        isLoading: false
                    }) 
                }                
            }         
        )             
    }

    render() {
        const electricityBlock = (            
            <tbody>
                <tr>
                    <th>Отключение электричества <img className="icon-lamp" src={require("../../assets/img/lamp.png")} alt="Иконка для света"/></th>
                </tr>
                <tr>
                    <th><span className="glyphicon glyphicon-time" aria-hidden="true"></span> Отключение: {this.state.electricity.start}</th>
                </tr>
                <tr>
                    <th><span className="glyphicon glyphicon-time" aria-hidden="true"></span> Планируемое возобновление: {this.state.electricity.estimatedStop}</th>
                </tr>
            </tbody>                      
        );
        const waterBlock = (           
            <tbody>
                <tr>
                    <th>Отключение воды <img className="icon-water" src={require("../../assets/img/water.png")} alt="Иконка для воды"/></th>
                </tr>
                <tr>
                    <th><span className="glyphicon glyphicon-time" aria-hidden="true"></span> Отключение: {this.state.water.start}</th>
                </tr>
                <tr>
                    <th><span className="glyphicon glyphicon-time" aria-hidden="true"></span> Планируемое возобновление: {this.state.water.estimatedStop}</th>
                </tr>
            </tbody>                       
        );
        const gasBlock = (           
            <tbody>
                <tr>
                    <th>Отключение газа <img className="icon-gas" src={require("../../assets/img/gas.png")} alt="Иконка для света"/></th>
                </tr>
                <tr>
                    <th><span className="glyphicon glyphicon-time" aria-hidden="true"></span> Отключение: {this.state.gas.start}</th>
                </tr>
                <tr>
                    <th><span className="glyphicon glyphicon-time" aria-hidden="true"></span> Планируемое возобновление: {this.state.gas.estimatedStop}</th>
                </tr>
            </tbody>                
        );
        const forecastBlock = (
            <div>
                <h4>Уведомления по адресу: {this.state.address}</h4>                        
                <table className='table table-borderless table-condensed table-hover'>{ this.state.electricity ? electricityBlock : ""}</table> 
                <table className='table table-borderless table-condensed table-hover'>{ this.state.water ? waterBlock : ""}</table> 
                <table className='table table-borderless table-condensed table-hover'>{ this.state.gas ? gasBlock : ""}</table>
            </div> 
        );

        return (
            <div>
                <button 
                    onClick={this.getForecastsInModal} 
                    disabled={this.state.isLoading} 
                    id="check-adress-main"
                >{this.state.isLoading ? <span><img className="spinner" src={require("../../assets/img/spinner.gif")}/>ПРОВЕРИТЬ ОТКЛЮЧЕНИЯ</span> : "ПРОВЕРИТЬ ОТКЛЮЧЕНИЯ"}
                </button>
                <Modal id="checkyouradress" className="modal fade" tabIndex="-1" role="dialog"show={this.state.showModal} onHide={this.closeModal}>
                    <div className="modal-dialog" role="document">
                        <Modal.Body>
                            { this.state.responseError ? <h4>{this.state.responseError}</h4> : forecastBlock }
                            <h2>Вы не авторизованы.</h2>                           
                            <h3>Возможности авторизованных пользователей:</h3>
                            <ul>
                                <li>Получение всех уведомлений</li>
                                <li>Доступна вкладка "Объявления". Вы будете в курсе всех событий,которые происходят у Вас в доме.
                                </li>
                                <li>Доступна вкладка "Опросы". Вы сможете учавствовать в опросах, которые будут относиться к Вашему
                                    дому
                                </li>
                                <li>Вы сможете сообщать об отключении света, газа и воды остальным жильцам Вашего дома</li>
                                <li>Вам будут доступны настройки профиля,добавление дополнительных адресов, настройки
                                    уведомлений (push или sms)
                                </li>
                            </ul>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="submit" className="login-modal  btn btn-default form-btn-checkadress">Войти</button>
                                <button type="submit" className=" login-modal btn btn-default form-btn-checkadress"> Регистрация
                                </button>
                            </div>
                        </Modal.Footer>
                    </div>
                </Modal>
            </div>
        )
    }
}

CheckAdress.propTypes = {
    getAllForecastsRequest: React.PropTypes.func.isRequired
}

