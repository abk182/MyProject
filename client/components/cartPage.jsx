import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {thunkCartDelete, thunkGetCartItems} from '../side-effects/thunks'

const mapStateToProps = ({Cart}) => ({Cart});

const mapDispatchToProps = dispatch => ({
    getCartItems: ()=> dispatch(thunkGetCartItems()),
    thunkCartDelete: (index) => dispatch(thunkCartDelete(index)),
});


class CartPage extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getCartItems();
    }

    totalPrice(){
        let price=0;
        this.props.Cart.map(item=>{
            price= price +item.price;

        });
        return price;
    }

    render() {
        console.log(this.props);
        return (
            <div className="container" >
                <nav className="nav-tabs">Кнопка корзины</nav>
                <div className="container">

                            {this.props.Cart.length ? this.props.Cart.map((item,index)=>{
                                return (
                                    <div key={index} className="row">
                                        <Link to ={`/item/${item.id}`} className="col row" onClick={(e)=>selectItem(item)}>
                                            <div className="col">
                                                <img className="img-fluid" src={"../img/"+item.img}/>
                                            </div>
                                            <div className="col-2">{item.name}</div>
                                            <div className="col-2">{item.price} руб.</div>
                                        </Link>
                                        <input type="submit"
                                               value="X"
                                               className="col-2 btn btn-secondary btn-sm"
                                               onClick={(e)=>this.props.thunkCartDelete(index)}/>
                                    </div>
                                )
                            }) : <div className="row"><div className="col">Корзина пуста</div></div> }

                </div>
                {this.props.Cart.length ? (<div className="container">
                    <div className="row">
                        <div className="col">Сумма к опате: </div>
                        <div className="col-12">{this.totalPrice()}</div>
                        <input type="submit" value="Оформить заказ" className="col-2 btn btn-secondary btn-sm"/>
                    </div>
                </div>):''}
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartPage);