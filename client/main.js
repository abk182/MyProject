import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Match } from 'react-router-dom';
import thunk from 'redux-thunk';
import Cookies from 'js-cookie';

import MainPage from './components/mainPage.jsx';
import ItemPage from './components/itemPage.jsx';
import CartPage from './components/cartPage.jsx';
import AdministrationPage from './components/administrationPage.jsx';
import * as reducers from'./reducers/reducer.js';

const store = createStore(combineReducers(reducers),applyMiddleware(thunk));

if(!Cookies.get("cartID")) Cookies.set("cartID", +new Date(), { expires: 2} );

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path ='/' component = {MainPage}/>
                <Route path ='/item/:id' component = {ItemPage}/>
                <Route path ='/cart' component={CartPage}/>
                <Route path='/admin' component={AdministrationPage}/>
            </div>
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root')
);



store.subscribe(()=> console.log('Store subscribe: ',store.getState()));
