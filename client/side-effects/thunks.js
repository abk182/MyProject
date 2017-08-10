import { getItemsListRequest, selectedItemRequest } from "../requests/requests"

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


