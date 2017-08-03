import React from 'react';
import { Link } from 'react-router-dom';

//тупой каталог
export const Catalogue = ({props}) => {
    return(
        <div className="catalogue row">
            {
                props.ItemsList.map((item,index) => {
                    return(
                        <div className="item col-md-3 col-sm-6 " key={item.id}>
                            <Link to ={`/item/${item.id}`} className="d-block link" onClick={(e)=>props.selectItem(item)}>
                                <img src={item.img} className="item-img img-fluid" />
                                <div className="item-info">
                                <p className="item-name">{item.name}</p>
                                <p className="item-price">Цена: {item.price} руб.</p>
                                </div>
                            </Link>
                            <button id={item.id} className="cart-btn btn btn-block btn-sm"
                                    onClick={(e)=>props.cartAdd(item)}>В корзину</button>
                        </div>
                    )
                })
            }
        </div>
    )
};
