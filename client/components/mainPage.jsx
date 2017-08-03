import React from 'react';
import { connect } from 'react-redux';

import { MainMenu } from './mainMenu.jsx';
import { Catalogue } from './catalogue.jsx';
import { thunkItemsList } from "../side-effects/thunks";
import { selectItem, cartAdd } from '../actions/actions.js'


const mapStateToProps = ({ItemsList})=>({ItemsList});

const mapDispatchToProps = dispatch => ({
    getItemsList: ()=> dispatch(thunkItemsList()),
    selectItem: (item)=> dispatch(selectItem.select(item)),
    cartAdd: (item) => dispatch(cartAdd.add(item))
});


class MainPage extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.getItemsList();
    }

    render() {
        console.log(this.props);
        return (
            <div className="container" >
                <MainMenu/>
                <Catalogue props={this.props}/>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);