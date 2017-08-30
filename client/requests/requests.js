import axios from 'axios';
import Cookies from 'js-cookie';

import { getItemsList,selectItem, cart } from '../actions/actions.js';

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
    catch(err){
        console.log(err)
    }
};

//функция запроса на добавления в карзину
export const cartGetRequest = async(dispatch) => {
    try {
        let response = await axios.get('/cartGet/'+Cookies.get().cartID);
        dispatch(cart.get(response.data));
    } catch (err){
        console.log(err);
    }
};

export const cartAddRequest = async(dispatch, id) => {
  try{
      let response = await axios.post('/cartAdd/'+ Cookies.get().cartID, {'id':id});
      dispatch(cart.add(response.data));
  } catch(err) {
      console.log(err);
  }
};

export const cartDeleteRequest = async(dispatch, index) => {
    try{
        let response = await axios.patch('/cartDelete/'+ Cookies.get().cartID,{'index':index});
        dispatch(cart.delete(response.data));
    }catch(err){
        console.log(err);
    }
};

export const orderRequest = async(dispatch, order)=> {
    try{
        let response = await axios.post('/order/'+Cookies.get().cartID, order);
        console.log(response.data);
    }catch (err){
        console.log(err);
    }
};

export const saveItemChangesRequest = async(dispatch, item) =>{
    try{
        let response = await axios.post('/saveItemChanges/'+item.id, item);
        if (response.data=='success') {
            let response = await axios.get('/items');
            dispatch(getItemsList.success(response.data))}
    }catch (err){
        console.log(err);
    }
};

export const deleteItemRequest = async(dispatch, id) => {
    try{
        let response = await axios.delete('/itemdelete/'+id);
        if (response.data=='success') {
            let response = await axios.get('/items');
            dispatch(selectItem.select({}))
            dispatch(getItemsList.success(response.data))}
    } catch(err) {
        console.log(err);
    }
};

export const addItemRequest = async(dispatch, img, Item) => {
    try {

        let responseImg = await axios.post('/addImg', img);
        Item.img = responseImg.data.img;
        console.log(Item);
        if (responseImg.data.status=='OK') {
            let responseNewItem = await axios.post('/addNewItem', Item);
            if( responseNewItem.data.status=='OK'){
                let response = await axios.get('/items');
                dispatch(getItemsList.success(response.data))
            }
        }
    } catch(err) {
        console.log(err);
    }
};

export const loginRequest = async(dispatch, credentials) => {
    try{
        await axios.post('/api/login', credentials)
    }catch (ERR){console.log(ERR)}
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

