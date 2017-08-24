import { ITEMS, CART, ORDER } from "../consts/consts";

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
        case ITEMS.ITEM_CHANGE_NAME: return Object.assign({},state,{name:action.Name});
        case ITEMS.ITEM_CHANGE_PRICE: return Object.assign({},state,{price:action.Price});
        case ITEMS.ITEM_CHANGE_COUNT: return Object.assign({},state,{count:action.Count});
        case ITEMS.ITEM_CHANGE_DESCRIPTION: return Object.assign({},state,{description:action.Description});
        default: return state || {};
    }
};

export const Cart = (state, action) =>{
    switch (action.type){
        case CART.CART_GET: return Object.assign([],action.ItemsList);
        case CART.CART_ADD: return Object.assign([],action.ItemsList);
        case CART.CART_DELETE: return  Object.assign([],action.ItemsList);
        default: return state || [];
    }
};

export const UserInfo = (state, action) => {
    switch (action.type){
        case ORDER.CHANGE_NAME: return Object.assign({},state,{name: action.Name});
        case ORDER.CHANGE_SURNAME: return Object.assign({},state,{surname: action.Surname});
        case ORDER.CHANGE_PHONE: return Object.assign({},state,{phone: action.Phone});
        case ORDER.CHANGE_ADDRESS: return Object.assign({},state,{address: action.Address});
        default: return state || {};
    }
};
