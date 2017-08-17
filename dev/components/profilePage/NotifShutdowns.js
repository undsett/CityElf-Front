import React from 'react';
import isEmpty from 'lodash/isEmpty';

export default class NotifShutdowns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            electricity: '',
            water: '',
            gas: '',
            responseError: '',
            isLoading: true
        }
    }

    componentWillMount() {
        this.props.getAllForecastsRequest(this.props.userCurrentAddress).then(
            (response) => {
                const forecastList = JSON.parse(response.text);
                if (isEmpty(forecastList)) {
                    this.setState({
                        showModal: true,
                        responseError: "Уведомления не найдены"
                    })
                } else {
                    for (let forecast of forecastList) {                
                        if ("Electricity" in forecast) {
                            let electricity = forecast.Electricity
                            let start = '';
                            if (electricity.start) {
                                start = new Date();
                                start.setTime(Date.parse(electricity.start));
                            } else {
                                start = "неизвестно";
                            }                   
                            let estimatedStop = '';
                            if (electricity.estimatedStop) {
                                estimatedStop = new Date();
                                estimatedStop.setTime(Date.parse(electricity.estimatedStop));
                            } else {
                                estimatedStop = "неизвестно";
                            }

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
                            let start = '';
                            if (water.start) {
                                start = new Date();
                                start.setTime(Date.parse(water.start));
                            } else {
                                start = "неизвестно";
                            }           
                            let estimatedStop = '';
                            if (water.estimatedStop) {
                                estimatedStop = new Date();
                                estimatedStop.setTime(Date.parse(water.estimatedStop));
                            } else {
                                estimatedStop = "неизвестно";
                            }

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
                            let start = '';
                            if (gas.start) {
                                start = new Date();
                                start.setTime(Date.parse(gas.start));
                            } else {
                                start = "неизвестно";
                            }                                       
                            let estimatedStop = '';
                            if (gas.estimatedStop) {
                                estimatedStop = new Date();
                                estimatedStop.setTime(Date.parse(gas.estimatedStop));
                            } else {
                                estimatedStop = "неизвестно";
                            }

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
                    }
                }
                this.setState({
                    isLoading: false
                })               
            },   
            (error) => {
                if (error.status == 400) {
                   this.setState({
                        responseError: "Уведомления не найдены",
                        isLoading: false
                    }) 
                } else {
                    this.setState({
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
                <table className='table table-borderless table-condensed table-hover'>{ this.state.electricity ? electricityBlock : ""}</table> 
                <table className='table table-borderless table-condensed table-hover'>{ this.state.water ? waterBlock : ""}</table> 
                <table className='table table-borderless table-condensed table-hover'>{ this.state.gas ? gasBlock : ""}</table>
            </div> 
        );
        return (
            <div role="tabpanel" className="tab-pane active" id="notifications">
                { this.state.isLoading ? <p><img className="spinner" src={require("../../assets/img/spinner.gif")}/></p> : "" }
                { this.state.responseError ? <p>{this.state.responseError}</p> : forecastBlock }
            </div>
        )
    }
}

NotifShutdowns.propTypes = {
    getAllForecastsRequest: React.PropTypes.func.isRequired
}