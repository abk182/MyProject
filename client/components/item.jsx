import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({props}) => {
    console.log(props);
    return(
        <div className="item col-md-3 col-sm-6 container">
            <Link to ={`/item:${props.id}`}>
                <img src="http://volumebikes.com/bmx/wp-content/uploads/VOL-vlm-vessel-blk.jpg" className="img-fluid"/>
                <p className="item-name">{props.name}</p>
                <p className="item-price">Цена: {props.price} руб.</p>
            </Link>
            <button id={props.id} className="btn btn-block btn-sm"
                    onClick={(e)=>AddToCard(e.target.id)}>В корзину</button>
        </div>

    )
};

const AddToCard=(id)=>{
    console.log(id);
};