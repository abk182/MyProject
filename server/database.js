const mysql = require('mysql');

let state = {
    database: null
};

module.exports = {
    connect: (done) => {

        if(state.database) return done();

        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'npzpnr23',
            database: 'shop'
        });

        state.database = connection;

        done();
    },
    get: () => (state.database)
};
