const express = require('express');
const path = require('path');

express()
    .use('/',express.static(path.join(__dirname,'../public')))
    .listen(3000, function () {
        console.log('Start on 3000');
    });

