import React from 'react';

import { Item } from './item.jsx';

export const Catalogue = ({props}) => {
    return(
        <div className="catalogue row">
            {
                props.ItemsList.map((item,index) => {
                    return<Item props={item} key={item.id}/>
                })
            }
        </div>
    )
}
