const express = require('express'),
    router = express.Router(),
    itemsDb = require('../models/itemsDb');

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


router.get('/items', async(req,res)=>{
    try{
        let response = await itemsDb.getItems()
        console.log('res',response);
        res.send(response);
    }
    catch(err){console.log(err)}
});

//момент для уточнения
module.exports= router;