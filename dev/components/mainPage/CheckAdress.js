import React from 'react';
import {Modal} from 'react-bootstrap';
import isEmpty from 'lodash/isEmpty';

import LoginRegisterButton from './LoginRegisterButton';

export default class CheckAdress extends React.Component{
    constructor() {
        super();

        this.state = {
            showModal: false,
            address: '',
            electricity: '',
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
            electricity: '',
            water: '',
            gas: '',
            responseError: '',
            isLoading: true
        })        
        this.props.getAllForecastsRequest(this.props.address).then(
            (response) => {
                let forecast = JSON.parse(response.text);             
                if (isEmpty(forecast)) {
                    this.setState({
                        showModal: true,
                        responseError: "Уведомления не найдены"
                    })
                } 
                if ("Electricity" in forecast) {
                    let electricity = forecast.Electricity
                    let start = new Date();
                    start.setTime(Date.parse(electricity.start));
                    if (electricity.estimatedStop) {
                        let estimatedStop = new Date();
                        estimatedStop.setTime(Date.parse(electricity.estimatedStop));
                        electricity = {
                            ...electricity,
                            start: start.toLocaleString(),
                            estimatedStop: estimatedStop.toLocaleString()
                        };  
                    } else {
                        electricity = {
                            ...electricity,
                            start: start.toLocaleString(),
                            estimatedStop: "неизвестно"
                        };
                    }
                    
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
                    if (water.estimatedStop) {
                        let estimatedStop = new Date();
                        estimatedStop.setTime(Date.parse(water.estimatedStop));
                        water = {
                            ...water,
                            start: start.toLocaleString(),
                            estimatedStop: estimatedStop.toLocaleString()
                        };
                    } else {
                        water = {
                            ...water,
                            start: start.toLocaleString(),
                            estimatedStop: "неизвестно"
                        };
                    }
                    
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
                    if (gas.estimatedStop) {
                        let estimatedStop = new Date();
                        estimatedStop.setTime(Date.parse(gas.estimatedStop));
                        gas = {
                            ...gas,
                            start: start.toLocaleString(),
                            estimatedStop: estimatedStop.toLocaleString()
                        }; 
                    } else {
                        gas = {
                            ...gas,
                            start: start.toLocaleString(),
                            estimatedStop: "неизвестно"
                        }; 
                    }                    
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
        const { isAuthenticated } = this.props.authorization;
        const authBlock = (
            <div>
                <h3 className="check-address-headline">Возможности авторизованных пользователей:</h3>
                <ul>
                    <li> Списки отключений по нескольким сохраненным адресам;</li>
                    <li> Возможность самому сообщать жильцам дома об аварийных отключениях;
                    </li>
                    <li> Функции ОСМД: объявления и опросы для вашего дома;
                    </li>
                    <li> Возможность запросить права администратора для главы ОСМД;</li>
                    <li> Расширенные настройки профиля.
                    </li>
                </ul>
            </div>
        );
        const userFooter = (
            <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.closeModal}>OK</button>
        );
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
                <tr>
                    <th>{this.state.electricity.peopleReport ? "Об отключении сообщил жилец дома" : ""}</th>
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
                <tr>
                    <th>{this.state.water.peopleReport ? "Об отключении сообщил жилец дома" : ""}</th>
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
                <tr>
                    <th>{this.state.gas.peopleReport ? "Об отключении сообщил жилец дома" : ""}</th>
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
                            <Modal.Header closeButton></Modal.Header>
                            { this.state.responseError ? <h4>{this.state.responseError}</h4> : forecastBlock }
                            { isAuthenticated ? '' : authBlock }                           
                        </Modal.Body>
                        <Modal.Footer>
                            { isAuthenticated ? userFooter : <LoginRegisterButton showSignUpModal = {this.props.showSignUpModal} closeModal = {this.closeModal}/> }
                        </Modal.Footer>
                    </div>
                </Modal>
            </div>
        )
    }
}

CheckAdress.propTypes = {
    getAllForecastsRequest: React.PropTypes.func.isRequired,
    authorization: React.PropTypes.object.isRequired,
    showSignUpModal: React.PropTypes.func.isRequired
}

