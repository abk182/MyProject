import React from 'react';

import { Item } from './item.jsx'

let ItemsList=[
    {
        id:1,
        name:'BSD ALVX frame',
        price:'19900',
    },
    {
        id:2,
        name:'BDS Passenger',
        price:'22900'
    },
    {
        id:3,
        name:'Volume',
        price:'21900'
    },
    {
        id:4,
        name:'Total',
        price:'25900'
    }
];

export const Catalogue = () => {
    return(
        <div className="catalogue row">
            {
                ItemsList.map((item,index) => {
                    return<Item props={item} key={item.id}/>
                })
            }
        </div>
    )
}
