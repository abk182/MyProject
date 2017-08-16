import axios from 'axios';
import { getItemsList,selectItem, cart, sendFileSuceess } from '../actions/actions.js';

export const SendFileRequest = async(dispatch, file) => {
  try {
    console.log('file', file);
    let formData = new FormData()
    formData.append('name', file);
    let success = await axios.post('/file', formData)
    dispatch(sendFileSuceess(success));
  } catch(err) {
    console.log(err);
  }
}
//запрос имеющегося списка товаров
export const getItemsListRequest = async(dispatch)=> {
    try{
        let response = await axios.get('/items');
        dispatch(getItemsList.success(response.data))
    }
    catch(err) {
        dispatch(getItemsList.error(err));
    }
};

//запрос выбранного товара
export const selectedItemRequest = async(dispatch, id)=> {
    try{
        let response = await axios.get(`/selectedItem/${id}`);
        dispatch(selectItem.select(response.data))
    }
    catch(err){console.log(err)}
};

//функция запроса на добавления в карзину
export const cartAddRequest = async(dispatch, id) => {
  try{
      let response = await axios.post('/cartAdd', {'id':id});
      dispatch(cart.add(response.data))
  }catch(err){console.log(err);}
};






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
