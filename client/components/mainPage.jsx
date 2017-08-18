import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Catalogue } from './catalogue.jsx';
import { thunkItemsList, thunkCartAdd, thunkGetCartItems } from "../side-effects/thunks";
import { selectItem } from '../actions/actions.js'


const mapStateToProps = ({ItemsList,Cart})=>({ItemsList,Cart});

const mapDispatchToProps = dispatch => ({
    getItemsList: ()=> dispatch(thunkItemsList()),
    thunkCartAdd: (id) => dispatch(thunkCartAdd(id)),
    getCartItems: ()=> dispatch(thunkGetCartItems()),
    selectItem: (Item) => dispatch(selectItem.select(Item))
});


class MainPage extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.getItemsList();
        this.props.getCartItems();
    }

    render() {
        return (
            <div className="container" >
                <nav className="main-menu nav-tabs">
                    <Link to="/cart" > Корзина {this.props.Cart.length ? '('+this.props.Cart.length+')' : ''} </Link>
                </nav>
                <Catalogue
                    ItemsList={this.props.ItemsList}
                    thunkCartAdd={this.props.thunkCartAdd}
                    selectItem={this.props.selectItem}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);