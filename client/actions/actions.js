import { GET_ITEMS } from "../consts/consts.js";

export const getItemsList = {
    // pending: ()=>({type:GET_ITEMS.GET_ITEMS_PENDING}),
    success: (ItemsList)=>({type:GET_ITEMS.GET_ITEMS_SUCCESS, ItemsList}),
    error: (error)=>({type:GET_ITEMS.GET_ITEMS_ERROR, error})
};