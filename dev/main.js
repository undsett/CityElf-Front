import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import reducer from './reducers'
import {userResources} from './resources/userResources.js';
import App from './components/App';
import MainPage from './components/mainPage/MainPage';
import Profile from './components/profilePage/Profile';
import './assets/css/mainpage.scss';
import './assets/css/profilepage.scss';
import './assets/css/slider.scss';
import '../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js';




const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={MainPage} />
                <Route path="/profile" component={Profile} />
                <Route path="/link-about-us" component={MainPage} />
                <Route path="/android" component={MainPage} /> 
            </Route>           
        </Router>
    </Provider>,
    document.getElementById('root')
);  


console.log("Hello");



            
        

