import { ITEMS, CART } from "../consts/consts";

export const ItemsList = (state,action)=>{
    switch (action.type){
        case ITEMS.GET_ITEMS_SUCCESS: return Object.assign([],action.ItemsList);
        case ITEMS.GET_ITEMS_ERROR: return state;
        default: return state || [];
    }
};

export const SelectedItem = (state, action) =>{
    console.log(action);
    switch (action.type){
        case ITEMS.ITEM_SELECT: return  Object.assign({},action.Item);
        default: return state || {};
    }
};

export const Cart = (state, action) =>{
    switch (action.type){
        case CART.CART_ADD: return Object.assign([],state,action.ItemsList);
        default: return state || [];
    }
};