import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationBar extends React.Component{
    render() {
        return (
            <nav id="top-menu-main">  
                <div className="navbar navbar-fixed-top navbar-inverse" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#b-menu-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <NavLink exact to="/" className="navbar-brand">CityElf</NavLink>
                        </div>
                        <div className="collapse navbar-collapse" id="b-menu-1">
                            <ul className="nav navbar-nav navbar-left">
                                <li><NavLink exact to="/" id="profile-link">Главная</NavLink></li>
                                <li><a href="#link-about-us">О нас</a></li>
                                <li><a href="#android">Мобильный доступ</a></li>
                                <li><a id="modalpopuplogin" href="#">Вход</a></li>
                                <li><NavLink to="/profile">Профиль</NavLink></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle language-choise" data-toggle="dropdown">
                                        <img src={require("../assets/img/translation.png")} alt="Глобус"/><b
                                            className="caret"></b></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Русский</a></li>
                                        <li><a href="#">English</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
} 