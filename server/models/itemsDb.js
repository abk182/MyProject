const db = require('../database.js');

exports.getItems = () => {
    return new Promise((resolve, reject) => {
        db.get().query('select * from items', (err, rows) => {
            if(err) reject(err);

            resolve(rows);
        })
    })
};
