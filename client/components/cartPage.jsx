import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { thunkCartDelete, thunkGetCartItems, thunkOrder } from '../side-effects/thunks'
import { order } from '../actions/actions'

const mapStateToProps = ({Cart, UserInfo}) => ({Cart, UserInfo});

const mapDispatchToProps = dispatch => ({
    getCartItems: () => dispatch(thunkGetCartItems()),
    thunkCartDelete: (index) => dispatch(thunkCartDelete(index)),
    thunkOrder: (order) => dispatch(thunkOrder(order)),
    changeName: (Name) => dispatch(order.changeName(Name)),
    changeSurname: (Surname) => dispatch(order.changeSurname(Surname)),
    changePhone: (Phone) => dispatch(order.changePhone(Phone)),
    changeAddress: (Address) => dispatch(order.changeAddress(Address))
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

    makeOrder(){
        let Order = {
            Cart:this.props.Cart,
            Info:this.props.UserInfo
        };
        return Order
    }

    render() {
        return (
            <div className="container" >
                <nav className="nav-tabs"><Link to ={`/`} className="col row">На главную</Link></nav>
                <div className="container">

                            {this.props.Cart.length ? this.props.Cart.map((item,index)=>{
                                return (
                                    <div key={index} className="row">
                                        <Link to ={`/item/${item.id}`} className="col row" onClick={(e)=>selectItem(item)}>
                                            <div className="col-md-4 col-sm">
                                                <img className="img-fluid" src={"../img/"+item.img}/>
                                            </div>
                                            <div className="col-md col-sm-4 ">{item.name}</div>
                                            <div className="col-md-3 col-sm-4 ">{item.price} руб.</div>
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
                    <hr/>
                    <p>Сумма к опате: {this.totalPrice()} руб.</p>
                    <div className="">
                        <p><input type="text" onChange={(e)=>this.props.changeName(e.target.value)}/> Имя</p>
                        <p><input type="text" onChange={(e)=>this.props.changeSurname(e.target.value)}/> Фамилия</p>
                        <p><input type="text" onChange={(e)=>this.props.changePhone(e.target.value)}/> Телефон</p>
                        <p><input type="text" onChange={(e)=>this.props.changeAddress(e.target.value)}/> Адрес</p>
                        <input type="submit"
                                value="Оформить заказ"
                                className="btn btn-success"
                                onClick={(e)=>this.props.thunkOrder(this.makeOrder())}/>
                    </div>
                </div>):''}
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartPage);