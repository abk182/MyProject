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

//момент для уточнения
module.exports= router;

let hardcode =[
    {
        id:1,
        name:'BSD ALVX frame',
        price:'19900',
        img:"http://www.manyfestbmx.pl/media/catalog/product/cache/2/image/650x/040ec09b1e35df139433887a97daa66f/b/s/bsd-alvx-frame-trans-blue.jpg"
    },
    {
        id:2,
        name:'BDS Passenger',
        price:'22900',
        img:"http://bsdforever.com/wp-content/files_mf/bsdframesafari004.jpg",
    },
    {
        id:3,
        name:'Volume Hatchet',
        price:'11900',
        img:"http://volumebikes.com/bmx/wp-content/uploads/hatchet1.jpg",
    },
    {
        id:4,
        name:'Total Hangover',
        price:'10800',
        img:"http://www.kickassbmx.com/images/total_crank2.jpg"
    }
];

