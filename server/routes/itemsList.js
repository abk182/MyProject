const express = require('express'),
    router = express.Router();

let hardcode =[
    {
        id:1,
        name:'BSD ALVX frame',
        price:'19900',
        img:''
    },
    {
        id:2,
        name:'BDS Passenger',
        price:'22900',
        img:'',
    },
    {
        id:3,
        name:'Volume',
        price:'21900',
        img:'',
    },
    {
        id:4,
        name:'Total',
        price:'25900',
        img:''
    }
];


router.get('/items', (req,res)=>{
    res.send(hardcode);
});

//момент для уточнения
module.exports= router;