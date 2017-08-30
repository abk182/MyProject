import { getItemsListRequest,
    selectedItemRequest,
    cartAddRequest,
    cartGetRequest,
    cartDeleteRequest,
    orderRequest,
    saveItemChangesRequest,
    deleteItemRequest,
    addItemRequest,
    loginRequest} from "../requests/requests"

export const thunkItemsList = () => {
    return (
        (dispatch) => {
            getItemsListRequest(dispatch);
        }
    )
};

export const thunkSelectedItem = (id) => {
    return (
        (dispatch) => {
            selectedItemRequest(dispatch, id);
        }
    )
};

export const thunkGetCartItems = () => {
    return (
        (dispatch) => {
            cartGetRequest(dispatch);
        }
    )
};

export const thunkCartAdd = (id) => {
    return (
        (dispatch) => {
            cartAddRequest(dispatch, id);
        }
    )
};

export const thunkCartDelete = (index) => {
    return (
        (dispatch) => {
            cartDeleteRequest(dispatch, index);
        }
    )
};

export const thunkOrder = (order) => {
    return (
        (dispatch) => {
            orderRequest(dispatch, order);
        }
    )
};

export const thunkSaveChanges = (item) => {
    return (
        (dispatch) => {
            saveItemChangesRequest(dispatch, item);
        }
    )
};

export const thunkDeleteItem = (id) => {
    return(
        (dispatch) => {
            deleteItemRequest(dispatch, id)
        }
    )
};

export const thunkAddItem = (img, Item) => {
    return(
        (dispatch) => {
            addItemRequest(dispatch, img, Item);
        }
    )
};

export const thunkLogin = (credentials)=>{
    return(
        (dispatch) => {
            loginRequest(dispatch, credentials);
        }
    )
};

