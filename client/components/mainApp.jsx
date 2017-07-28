import React from 'react';

import { MainMenu } from './mainMenu.jsx';
import { Catalogue } from './catalogue.jsx';

class MainApp extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="container" >
                <MainMenu/>
                <Catalogue/>
            </div>
        )
    }
}

export default MainApp;