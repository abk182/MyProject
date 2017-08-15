import { getItemsListRequest, selectedItemRequest, cartAddRequest } from "../requests/requests"

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

export const thunkCartAdd = (id) => {
    return (
        (dispatch) => {
            cartAddRequest(dispatch, id);
        }
    )
};

