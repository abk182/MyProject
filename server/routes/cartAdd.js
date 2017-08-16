const express = require('express'),
    router = express.Router(),
    cartsDB = require('../models/cartsDB'),
    itemsDB = require('../models/itemsDB');

router.post('/cartAdd', async(req, res)=>{
    try{
        let itemsIDs = await cartsDB.getIDsFromCurrentCart();
        itemsIDs+=req.body.id+',';
        let response = await cartsDB.pushIDsToDataBase(itemsIDs);
        IDsMassive= itemsIDs.split(',');
        IDsMassive.pop();

        let itemsInCart = [];
        let items = await itemsDB.getItems();
            IDsMassive.forEach(ID=>{
                items.map(item=>{
                    if (item.id==ID) itemsInCart.push(item);
                })
            });

        if (response === 'success') res.send(itemsInCart);
    }
    catch(err){console.log(err)}
});

module.exports= router;