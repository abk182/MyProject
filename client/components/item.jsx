import React from 'react';

export const Item = ({props}) => {
    console.log(props);
    return(
        <div className="item col-md-3 col-sm-6">
            <p className="item-name">{props.name}</p>
            <p className="item-price">Цена: {props.price} руб.</p>
            <div className="btn col">В корзину</div>
        </div>
    )
};