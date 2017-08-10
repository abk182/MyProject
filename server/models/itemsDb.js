const db = require('../database.js');

exports.getItems = () => {
    return new Promise((resolve, reject) => {
        db.get().query('select * from items', (err, rows) => {
            if(err) reject(err);

            resolve(rows);
        })
    })
};

exports.getSelectedItem = (id) => {
    return new Promise((resolve,reject)=>{
        db.get().query('select * from items where id = '+id, (err, rows)=>{
            if (err) reject(err);
            resolve(rows);
        })
    })
};
