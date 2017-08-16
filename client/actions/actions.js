import { ITEMS, CART } from "../consts/consts.js";

export const getItemsList = {
    success: (ItemsList)=>({type:ITEMS.GET_ITEMS_SUCCESS, ItemsList}),
    error: (error)=>({type:ITEMS.GET_ITEMS_ERROR, error})
};

export const selectItem = {
    select: (Item)=> ({type:ITEMS.ITEM_SELECT, Item})
};

export const cart = {
    add: (IDsList)=> ({type:CART.CART_ADD, IDsList})
};