import axios from 'axios';
import { getItemsList } from '../actions/actions.js';

//старый запрос(на всякий)
// export const getItemsListRequest=(dispatch)=> {
//     axios.get('/items')
//         .then(response => {
//             dispatch(getItemsList.success(response.data));
//         })
//         .catch(error => {
//             dispatch(getItemsList.error(error));
//         });
// };


export const getItemsListRequest= async(dispatch)=> {
    try{
        let response = await axios.get('/items');
        dispatch(getItemsList.success(response.data))
    }
    catch(err) {
        dispatch(getItemsList.error(err));
    }
};
