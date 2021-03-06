const express = require('express'),
    router = express.Router(),
    multer = require('multer'),
    path = require('path'),
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

router.post('/addImg', async(req,res)=>{
    try {
        let imgName='';
        let storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, path.join(__dirname, '../../public/img/'));
            },
            filename: function (req, file, cb) {
                imgName=file.originalname;
                cb(null, file.originalname)  //file.fieldname + '-' + Date.now() + '.' + file.mimetype.split('/')[1]
            }
        });

        let upload = multer({storage}).any();
        upload(req, res, err => {
            res.send({status: 'OK', img: imgName})
        });
    } catch(err) {
        console.log(err)
    }
});

router.post('/addNewItem', async(req,res)=>{
    try{
        let response = await itemsDB.addItem(req.body);
        res.send(response);
    } catch(err){
        console.log(err)
    }
});

module.exports= router;


