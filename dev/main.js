import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { HashRouter, Route } from 'react-router-dom';

import reducer from './reducers'
import {userResources} from './resources/userResources.js';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import App from './components/App';
import Profile from './components/profilePage/Profile';
import './assets/css/mainpage.scss';
import './assets/css/profilepage.scss';
import './assets/css/slider.scss';
import '../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js';





const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));




ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <NavigationBar /> 
                <Route exact path="/" component={App} />
                <Route path="/profile" component={Profile} />
                <Route path="/link-about-us" component={App} />
                <Route path="/android" component={App} />
                <Footer /> 
            </div>    
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);  


console.log("Hello");



            
        

