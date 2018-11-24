const mysql = require('mysql');
const BProm = require('bluebird');
const mysqlConfigs = require('./../../../configs').mysql;

module.exports = function connectToMysql () {
    return new BProm((resolve, reject) => {
        var connection = mysql.createConnection({
            host: mysqlConfigs.host,
            port: mysqlConfigs.post,
            user: mysqlConfigs.user,
            password: mysqlConfigs.password,
            database: mysqlConfigs.database
        });

        try {
            connection.connect();
        } catch(err) {
            return reject(err);
        }
        
        return resolve(connection);
    });
};
