import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Catalogue } from './catalogue.jsx';
import { thunkItemsList } from "../side-effects/thunks";
import { cartAdd, selectItem } from '../actions/actions.js'


const mapStateToProps = ({ItemsList})=>({ItemsList});

const mapDispatchToProps = dispatch => ({
    getItemsList: ()=> dispatch(thunkItemsList()),
    cartAdd: (Item) => dispatch(cartAdd.add(Item)),
    selectItem: (Item) => dispatch(selectItem.select(Item))
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
                <nav className="main-menu nav-tabs">
                    <li>Выбор каталога | </li>
                    <li>Еще какая-нибудь кнопка </li>
                    <Link to="/cart"> Корзина </Link>
                </nav>
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