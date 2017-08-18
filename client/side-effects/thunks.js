import { getItemsListRequest, selectedItemRequest, cartAddRequest, cartGetRequest, cartDeleteRequest} from "../requests/requests"

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


