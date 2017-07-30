const express = require('express'),
    router = express.Router();

router.get('/item:id', (req,res)=>{
   res.send('Item-Page');
});

//момент для уточнения
module.exports= router;