import { ITEMS, CART } from "../consts/consts.js";

export const getItemsList = {
    // pending: ()=>({type:GET_ITEMS.GET_ITEMS_PENDING}),
    success: (ItemsList)=>({type:ITEMS.GET_ITEMS_SUCCESS, ItemsList}),
    error: (error)=>({type:ITEMS.GET_ITEMS_ERROR, error})
};

export const selectItem = {
    select: (Item)=> ({type:ITEMS.ITEM_SELECT, Item})
};

export const cart = {
    add: (ItemsList)=> ({type:CART.CART_ADD, ItemsList})
};

export const sendFile = (file) => ({type: "SEND_FILE", file});
export const sendFileSuceess = (success) => ({type: "SEND_FILE_SUCCESS", success});
