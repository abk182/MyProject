const express = require('express'),
    router = express.Router(),
    itemsDb = require('../models/itemsDb');

let cartItems = []

router.get('/items', async(req,res)=>{
    try{
        let response = await itemsDb.getItems();
        res.send(response);
    }
    catch(err){console.log(err)}
});

router.get('/selectedItem/:id',async(req,res)=>{
    try{
        let response = await itemsDb.getSelectedItem(req.params['id']);
        res.send(response[0]);
    }
    catch(err){console.log(err)}
});

router.post('/cartAdd', async(req,res)=>{
    try{
        let response = await itemsDb.getSelectedItem(req.body.id);
        cartItems.push(response[0]);
        res.send(cartItems);
    }
    catch(err){console.log(err)}
});

router.post('/file', (req, res) => {


  console.log(req.body);
  let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/img/'));
    },
    filename: function (req, file, cb) {
      console.log(file)
      cb(null, file.fieldname + '-' + Date.now() + '.' + file.mimetype.split('/')[1])
    }
  })

  let upload = multer({storage}).any()

  upload(req, res, err => {
    res.send({status: 'ok'})
  })

})
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
