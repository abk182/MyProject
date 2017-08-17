import { ITEMS, CART } from "../consts/consts.js";

export const getItemsList = {
    success: (ItemsList)=>({type:ITEMS.GET_ITEMS_SUCCESS, ItemsList}),
    error: (error)=>({type:ITEMS.GET_ITEMS_ERROR, error})
};

export const selectItem = {
    select: (Item)=> ({type:ITEMS.ITEM_SELECT, Item})
};

export const cart = {
    get: (ItemsList) => ({type:CART.CART_GET, ItemsList }),
    add: (ItemsList)=> ({type:CART.CART_ADD, ItemsList})
};