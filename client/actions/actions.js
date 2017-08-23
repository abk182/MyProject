import { ITEMS, CART, ORDER } from "../consts/consts.js";

export const getItemsList = {
    success: (ItemsList)=>({type:ITEMS.GET_ITEMS_SUCCESS, ItemsList}),
    error: (error)=>({type:ITEMS.GET_ITEMS_ERROR, error})
};

export const selectItem = {
    select: (Item)=> ({type:ITEMS.ITEM_SELECT, Item}),
    changeName: (Name)=>({type:ITEMS.ITEM_CHANGE_NAME,Name}),
    changePrice: (Price)=>({type:ITEMS.ITEM_CHANGE_PRICE,Price}),
    changeCount: (Count)=>({type:ITEMS.ITEM_CHANGE_COUNT,Count}),
    changeDescription: (Description)=>({type:ITEMS.ITEM_CHANGE_DESCRIPTION,Description}),
};

export const cart = {
    get: (ItemsList) => ({type:CART.CART_GET, ItemsList }),
    add: (ItemsList)=> ({type:CART.CART_ADD, ItemsList}),
    delete: (ItemsList) => ({type:CART.CART_DELETE, ItemsList})
};

export const order = {
    changeName: (Name)=>({type: ORDER.CHANGE_NAME, Name}),
    changeSurname: (Surname)=>({type: ORDER.CHANGE_SURNAME, Surname}),
    changePhone: (Phone)=>({type: ORDER.CHANGE_PHONE, Phone}),
    changeAddress: (Address)=>({type: ORDER.CHANGE_ADDRESS, Address}),
};