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

exports.changeItemData = (item) => {
    return new Promise((resolve,reject)=>{
        db.get().query(`UPDATE items SET name='${item.name}', price='${item.price}', count='${item.count}', img='${item.img}' ,description='${item.description}' WHERE id=${item.id}`,
            (err,rows)=>{
            if (err) reject(err); resolve('success');
        })
    })
};

exports.deleteItem = (id) => {
    return new Promise((resolve,reject)=>{
        db.get().query('DELETE FROM items WHERE id='+id ,(err,rows)=>{
            if (err) reject(err);
            resolve('success');
        })
    })
};


