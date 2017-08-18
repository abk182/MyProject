import React from 'react';
import { Link } from 'react-router-dom';

//тупой каталог
export const Catalogue = ({ItemsList,thunkCartAdd, selectItem}) => {
    return(
        <div className="container">
        <div className="catalogue row">
            {
                ItemsList.map(item => {
                    return(
                        <div className="item col-md-3 col-sm-6 " key={item.id}>
                            <Link to ={`/item/${item.id}`} className="d-block link" onClick={(e)=>selectItem(item)}>
                                <img src={"img/" + item.img} className="item-img img-fluid" />
                                <div className="item-info">
                                <p className="item-name">{item.name}</p>
                                <p className="item-price">Цена: {item.price} руб.</p>
                                </div>
                            </Link>
                            <button type="button" id={item.id} className="cart-btn btn btn-secondary btn-sm"
                                    onClick={(e)=>thunkCartAdd(item.id)}>В корзину</button>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
};
