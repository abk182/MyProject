const express = require('express');
const path = require('path');
const db = require('./database');
const app = express();
const bodyParer = require('body-parser');

app.use(bodyParer.json());
app.use(bodyParer.urlencoded({extended: true}));
app.use('/',express.static(path.join(__dirname,'../public')));

app.get('/items', require('./routes/items'));
app.get('/selectedItem/:id', require('./routes/items'));
app.get('/cartGet/:cartID', require('./routes/cart'));
app.post('/cartAdd/:cartID', require('./routes/cart'));
app.patch('/cartDelete/:cartID', require('./routes/cart'));
app.post('/order/:id', require('./routes/order.js'));
app.post('/saveItemChanges/:id', require('./routes/items.js'));
app.post('/addImg', require('./routes/items.js'));
app.post('/addNewItem', require('./routes/items.js'));
app.delete('/itemdelete/:id', require('./routes/items'));


app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });

db.connect(()=>{
    app.listen(3000, console.log('Start 3000'))
});
