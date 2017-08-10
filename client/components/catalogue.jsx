import React from 'react';
import { Link } from 'react-router-dom';

//тупой каталог
export const Catalogue = ({ItemsList, cartAdd, selectItem}) => {
    return(
        <div className="catalogue row">
            {
                ItemsList.map((item,index) => {
                    return(
                        <div className="item col-md-3 col-sm-6 " key={item.id}>
                            <Link to ={`/item/${item.id}`} className="d-block link" >
                                <img src={item.img} className="item-img img-fluid" />
                                <div className="item-info">
                                <p className="item-name">{item.name}</p>
                                <p className="item-price">Цена: {item.price} руб.</p>
                                </div>
                            </Link>
                            <button id={item.id} className="cart-btn btn btn-block btn-sm"
                                    onClick={(e)=>cartAdd(item)}>В корзину</button>
                        </div>
                    )
                })
            }
        </div>
    )
};
