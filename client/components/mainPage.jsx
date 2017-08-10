import React from 'react';
import { connect } from 'react-redux';

import { MainMenu } from './mainMenu.jsx';
import { Catalogue } from './catalogue.jsx';
import { thunkItemsList } from "../side-effects/thunks";
import { cartAdd, selectItem } from '../actions/actions.js'


const mapStateToProps = ({ItemsList})=>({ItemsList});

const mapDispatchToProps = dispatch => ({
    getItemsList: ()=> dispatch(thunkItemsList()),
    cartAdd: (item) => dispatch(cartAdd.add(item)),
    selectItem: (item) => dispatch(selectItem.select(Item))
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
                <Catalogue
                    ItemsList={this.props.ItemsList}
                    cartAdd={this.props.cartAdd}
                    selectItem={this.props.selectItem}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);