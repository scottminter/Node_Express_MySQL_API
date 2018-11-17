const mysql = require('mysql');
const BProm = require('bluebird')

module.exports = function connectToMysql () {
    return new BProm((resolve, reject) => {
        var connection = mysql.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'scott',
            password: 'scott',
            database: 'demo_api'
        });

        try {
            connection.connect();
        } catch(err) {
            return reject(err);
        }
        
        return resolve(connection);
    });
};