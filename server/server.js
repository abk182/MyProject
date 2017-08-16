const express = require('express');
const path = require('path');
const db = require('./database');
const app = express();
const bodyParer = require('body-parser');

app.use(bodyParer.json());
app.use(bodyParer.urlencoded({extended: true}));
app.use('/',express.static(path.join(__dirname,'../public')));

app.get('/items', require('./routes/getItems'));
app.get('/selectedItem/:id', require('./routes/getItems'));
app.post('/cartAdd', require('./routes/cartAdd'));


app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });

db.connect(()=>{
    app.listen(3000, console.log('Start 3000'))
});
