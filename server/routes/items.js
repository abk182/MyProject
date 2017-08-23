const express = require('express'),
    router = express.Router(),
    itemsDB = require('../models/itemsDB');

router.get('/items', async(req,res)=>{
    try{
        let items = await itemsDB.getItems();
        res.send(items);
    } catch(err){
        console.log(err)
    }
});

router.get('/selectedItem/:id',async(req,res)=>{
    try{
        let selectedItem = await itemsDB.getSelectedItem(req.params['id']);
        res.send(selectedItem[0]);
    } catch(err){
        console.log(err)
    }
});

router.post('/saveItemChanges/:id', async(req,res)=>{
    try{
        let response = await itemsDB.changeItemData(req.body);
        res.send(response);
    } catch(err){
        console.log(err)
    }
});

router.delete('/itemdelete/:id', async(req,res)=>{
    try{
        let response = await itemsDB.deleteItem(req.params['id']);
        res.send(response);
    } catch (err) {
        console.log(err);
    }
});

module.exports= router;


