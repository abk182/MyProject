import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import { createStore } from 'redux';

import MainApp from './components/mainApp.jsx'

ReactDOM.render(
    <MainApp/>,
    document.getElementById('root')
);