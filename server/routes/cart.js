const express = require('express'),
    router = express.Router(),
    cartsDB = require('../models/cartsDB'),
    itemsDB = require('../models/itemsDB');


router.get('/cartGet', async(req,res)=>{
    try{
        let itemsIDs = await cartsDB.getIDsFromCurrentCart();
        let items = await ConvertIDsIntoItems(itemsIDs);
        res.send(items);
    }catch (err){console.log(err)}
});

router.post('/cartAdd', async(req, res)=>{
    try{
        let itemsIDs = await cartsDB.getIDsFromCurrentCart();       //достает из бд список уже имеющихся там ID'шек
        itemsIDs+=req.body.id+',';                                  //добавляет ID вносимого товара + ","
        let response = await cartsDB.pushIDsToDataBase(itemsIDs);   //вносит сформированный список ID'шек, если ок, возвращает success
        let items= await ConvertIDsIntoItems(itemsIDs);             //преобразует список ID'шек в список товаров
        if (response === 'success') res.send(items);
    }
    catch(err){console.log(err)}
});

async function ConvertIDsIntoItems(itemsIDs) {
    let IDs = itemsIDs.split(',');IDs.pop();
    let itemsInCart = [];
    let items = await itemsDB.getItems();
    IDs.forEach(ID=>{
        items.map(item=>{
            if (item.id==ID) itemsInCart.push(item);
        })
    });
    return itemsInCart;
}

module.exports= router;