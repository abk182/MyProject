const db = require('../database.js');

exports.getCurrentCart = (cartID) => {
    return new Promise((resolve, reject) => {

        db.get().query('select * from carts WHERE cartID = '+cartID, (err, rows) => {
            if (!rows.length) {
                db.get().query(`INSERT INTO carts (cartID, items) VALUES (${cartID}, '')`, (err)=>{
                    if (err) reject(err);
                });
                db.get().query('select * from carts WHERE cartID = '+cartID, (err, rows) => {
                    if (err) reject(err);
                    resolve(rows);
                })
            } else {
                if (err) reject(err);

                resolve(rows);
            }
        })
    })
};

exports.pushIDsToDataBase = (cartID,itemsIDs) => {
    return new Promise((resolve, reject)=>{
        db.get().query(`UPDATE carts SET items = '${itemsIDs}' WHERE cartID = ${cartID}`, (err,rows)=>{
            if (err) reject(err);
            resolve('success');
        })
    })
};
