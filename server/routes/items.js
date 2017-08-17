const express = require('express'),
    router = express.Router(),
    itemsDB = require('../models/itemsDB');

router.get('/items', async(req,res)=>{
    try{
        let items = await itemsDB.getItems();
        res.send(items);
    }
    catch(err){console.log(err)}
});

router.get('/selectedItem/:id',async(req,res)=>{
    try{
        let selectedItem = await itemsDB.getSelectedItem(req.params['id']);
        res.send(selectedItem[0]);
    }
    catch(err){console.log(err)}
});

module.exports= router;


