import { GET_ITEMS, ITEM_SELECT } from "../consts/consts";

export const ItemsList = (state=[],action)=>{
    console.log(action);
    switch (action.type){
        case GET_ITEMS.GET_ITEMS_SUCCESS: return Object.assign([],action.ItemsList);
        case GET_ITEMS.GET_ITEMS_ERROR: return state;
        default: return state;
    }
};

export const SelectedItem = (state={}, action) =>{
    switch (action.type){
        case ITEM_SELECT.ITEM_SELECT: return  Object.assign({},action.Item);
        default: return state;
    }
};

export const Cart = (state=[], action) =>{
    switch (action.type){

        default: return state;
    }
};