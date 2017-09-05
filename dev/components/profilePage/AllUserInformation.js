import React from 'react';
import { connect } from 'react-redux';

import NotifShutdowns from './NotifShutdowns';
import Advertisements from './Advertisements';
import Polls from './Polls';
import AddAddressButton from './AddAddressButton';
import AdministratorRoleLink from "./AdministratorRoleLink";
import ButtonSettings from "./ButtonSettings";
import LogoutButton from "./LogoutButton";


export default class AllUserInformation extends React.Component {   
    render() {
        const { userData } = this.props;
        const userCurrentAddress = userData.addresses.length > 0 ? userData.addresses[0].address : '';
        return (
            <section className="user-notifacations">
                <div className="container center">
                    <div className="row">
                        <div id="nofication-block" className="col-md-4 col-sm-12 info-service-panel">
                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation" className="active">
                                    <a href="#notifications" aria-controls="notifications" role="tab" data-toggle="tab">Уведомления</a>
                                </li>
                                <li role="presentation">
                                    <a href="#notice" aria-controls="notice " role="tab" data-toggle="tab">Обьявления</a>
                                </li>
                                <li role="presentation"><a href="#interview" aria-controls="interview" role="tab" data-toggle="tab">Опросы</a></li>
                            </ul>
                            <div className="tab-content">
                                <NotifShutdowns 
                                    userCurrentAddress={userCurrentAddress} 
                                    getAllForecastsRequest={this.props.getAllForecastsRequest} 
                                />
                                <Advertisements />
                                <Polls />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-5 user-profile sidebar" id="sticky">
                            <h2>Профиль</h2>
                            <h3>Электронная почта:</h3>
                            <p id="user-email">{userData.email}</p>
                            <h3>Текущий адрес:</h3>
                            <p id="user-adress">{ userCurrentAddress ? userCurrentAddress : "Введите адрес в настройках"}</p>
                            <h3>Дополнительный адрес <span id="additional-adress">(доступно 0 из 10):</span></h3>
                            <AddAddressButton/>
                            <ButtonSettings/>
                            <div>
                                <LogoutButton />
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-5 user-profile sidebar">
                            <ul>
                                <li>Если Вы глава ОСМД, то можете получить дополнительные функции:</li>
                                <li>Добавлять объявления для жильцов вашего дома;</li>
                                <li>Добавлять опросы и следить за результатами.</li>
                                <h4 className="administration-headline">Чтобы получить эти функции, кликните по ссылке ниже.</h4>
                            </ul>
                            <AdministratorRoleLink />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

AllUserInformation.propTypes = {
    userData: React.PropTypes.object.isRequired,
    getAllForecastsRequest: React.PropTypes.func.isRequired
}












