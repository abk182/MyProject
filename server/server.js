const express = require('express');
const path = require('path');
const db = require('./database');
const app = express();


app.use('/',express.static(path.join(__dirname,'../public')));
app.get('/items', require('./routes/routes'));
app.get('/selectedItem/:id', require('./routes/routes'));
app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });

db.connect(()=>{
    app.listen(3000, console.log('Start 3000'))
});
