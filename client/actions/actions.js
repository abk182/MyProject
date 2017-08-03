import { ITEMS, CART } from "../consts/consts.js";

export const getItemsList = {
    // pending: ()=>({type:GET_ITEMS.GET_ITEMS_PENDING}),
    success: (ItemsList)=>({type:ITEMS.GET_ITEMS_SUCCESS, ItemsList}),
    error: (error)=>({type:ITEMS.GET_ITEMS_ERROR, error})
};

export const selectItem = {
    select: (Item)=> ({type:ITEMS.ITEM_SELECT, Item})
};

export const cartAdd = {
    add: (Item)=> ({type:CART.CART_ADD, Item})
};