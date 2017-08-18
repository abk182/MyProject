import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { thunkSelectedItem, thunkCartAdd, thunkGetCartItems } from "../side-effects/thunks";

const mapStateToProps = ({SelectedItem, Cart},params) => ({
    SelectedItem,
    Cart,
    itemID: params.match.params.id
});

const mapDispatchToProps = dispatch => ({
    thunkSelectedItem: (id)=> dispatch(thunkSelectedItem(id)),
    thunkCartAdd: (id) => dispatch(thunkCartAdd(id)),
    getCartItems: ()=> dispatch(thunkGetCartItems()),
});


class ItemPage extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        if (!this.props.SelectedItem.id) this.props.thunkSelectedItem(this.props.itemID);
        this.props.getCartItems();
    }

    render() {
        console.log(this.props);
        return (
            <div className="container" >
                <nav className="main-menu nav-tabs">
                    <Link to="/cart" > Корзина {this.props.Cart.length ? '('+this.props.Cart.length+')' : ''} </Link>
                </nav>
                <div className="row">
                    <div className="col">
                        <img className="img-fluid" src={"../img/" + this.props.SelectedItem.img}/>
                    </div>
                    <div className="col-4">
                        <p>{this.props.SelectedItem.name}</p>
                        <p>{this.props.SelectedItem.price}</p>
                        <p>{this.props.SelectedItem.description}</p>
                    </div>
                </div>
                <button className="btn col" onClick={()=> this.props.thunkCartAdd(this.props.SelectedItem.id)}> В корзину </button>
          </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemPage);
