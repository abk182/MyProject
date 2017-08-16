const db = require('../database.js');

exports.getIDsFromCurrentCart = () => {
    return new Promise((resolve, reject) => {
        db.get().query('select * from carts WHERE cartID = 0', (err, rows) => {
            if(err) reject(err);
            resolve(rows[0].items);
        })
    })
};

exports.pushIDsToDataBase = (itemsIDs) => {
    return new Promise((resolve, reject)=>{
        db.get().query(`UPDATE carts SET items = '${itemsIDs}' WHERE cartID = 0`, (err,rows)=>{
            if (err) reject(err);
            resolve('success');
        })
    })
};