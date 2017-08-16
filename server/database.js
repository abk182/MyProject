const mysql = require('mysql');

let state = {
    database: null
};

module.exports = {
    connect: (done) => {

        if(state.database) return done();

        let connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'npzpnr23',
            database: 'shop'
        });

        state.database = connection;
        done();
    },
    get: () => (state.database)
};
