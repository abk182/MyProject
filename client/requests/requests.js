import axios from 'axios';
import { getItemsList } from '../actions/actions.js';

export const getItemsListRequest=(dispatch)=> {
    axios.get('/items')
        .then(response => {
            dispatch(getItemsList.success(response.data));
        })
        .catch(error => {
            dispatch(getItemsList.error(error));
        });
};