import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Match } from 'react-router-dom';
import thunk from 'redux-thunk';

import MainPage from './components/mainPage.jsx';
import ItemPage from './components/itemPage.jsx';
import * as reducers from'./reducers/reducer.js';

const store = createStore(combineReducers(reducers),applyMiddleware(thunk));
// console.log('Store init: ',store.getState());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path ='/' component = {MainPage}/>
                <Route path ='/item:id' component = {ItemPage}/>
                <hr/>
            </div>
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root')
);

store.subscribe(()=> console.log('Store subscribe: ',store.getState()));