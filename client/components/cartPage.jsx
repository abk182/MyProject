import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = ({Cart}) => ({Cart});

const mapDispatchToProps = dispatch => ({
});


class CartPage extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props);
        return (
            <div className="container" >
                <nav className="nav-tabs">Кнопка корзины</nav>
                <div className="row">
                    <div className="col-6">
                            {this.props.Cart.length ? this.props.Cart.map((item,index)=>{
                                return (
                                    <div key={index}>
                                        <p>{item.name}</p>
                                        <p>{item.price}</p>
                                        <img className="img-fluid col-6" src={"../img/"+item.img}/>
                                    </div>
                                )
                            }) : 'Корзина пуста' }
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartPage);