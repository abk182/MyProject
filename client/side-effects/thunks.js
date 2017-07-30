import { getItemsListRequest, } from "../requests/requests"

export const thunkItemsList = () => {
    return (
        (dispatch) => {
            getItemsListRequest(dispatch);
        }
    )
};


