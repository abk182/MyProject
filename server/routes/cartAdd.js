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

        if (response === 'success') res.send(IDsMassive);
    }
    catch(err){console.log(err)}
});

module.exports= router;