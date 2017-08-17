const express = require('express'),
    router = express.Router(),
    cartsDB = require('../models/cartsDB'),
    itemsDB = require('../models/itemsDB');


router.get('/cartGet', async(req,res)=>{
    try{
        let cart = await cartsDB.getCurrentCart();
        let items = await ConvertIDsIntoItems(cart[0].items);
        res.send(items);
    }catch (err){res.send({Error: 'Might be no such card with id'})}
});

router.post('/cartAdd', async(req, res)=>{
    try{
        let cart = await cartsDB.getCurrentCart();                          //достает из бд список уже имеющихся там ID'шек
        let IDs = cart[0].items+req.body.id+',';                           //добавляет ID вносимого товара + ","
        let response = await cartsDB.pushIDsToDataBase(IDs);               //вносит сформированный список ID'шек, если ок, возвращает success
        let items= await ConvertIDsIntoItems(IDs);             //преобразует список ID'шек в список товаров
        if (response === 'success') res.send(items);
    }
    catch(err){res.send({Error: 'Might be no such card with id'})}
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